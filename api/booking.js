const RECIPIENT = "africadining1@gmail.com";

const respond = (res, status, body) => res.status(status).json(body);
const cleanText = (value, maxLength = 500) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";
const validEmail = (value) =>
  value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return respond(res, 405, { ok: false, error: "Method not allowed." });
  }

  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return respond(res, 400, { ok: false, error: "Invalid request." });
  }

  // Quietly accept bot submissions caught by the hidden honeypot.
  if (cleanText(body.website, 200)) return respond(res, 200, { ok: true });

  const name = cleanText(body.name, 120);
  const email = cleanText(body.email, 254);
  const phone = cleanText(body.phone, 80);
  const country = cleanText(body.country, 100);
  const destination = cleanText(body.destination, 160);
  const travelDate = cleanText(body.travelDate, 10);
  const item = cleanText(body.item, 160);
  const price = cleanText(body.price, 100);
  const notes = cleanText(body.notes, 2000);
  const adults = Number(body.adults);
  const children = Number(body.children);

  const validDate = /^\d{4}-\d{2}-\d{2}$/.test(travelDate) &&
    !Number.isNaN(Date.parse(`${travelDate}T00:00:00.000Z`)) &&
    new Date(`${travelDate}T00:00:00.000Z`).toISOString().slice(0, 10) === travelDate;

  if (!name || !validEmail(email) || !phone || !country || !destination || !validDate ||
      !Number.isInteger(adults) || adults < 1 || adults > 16 ||
      !Number.isInteger(children) || children < 0 || children > 16 || !item) {
    return respond(res, 400, { ok: false, error: "Please check the booking details and try again." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.BOOKING_FROM_EMAIL;
  if (!apiKey || !from) {
    return respond(res, 503, { ok: false, error: "Booking email is not configured yet." });
  }

  const text = [
    "New booking request from the Africa Dining & Travel Guide website",
    "",
    `Requested experience: ${item}`,
    `Price shown: ${price || "Not specified"}`,
    `Country: ${country}`,
    `Destination: ${destination}`,
    `Travel date: ${travelDate}`,
    `Adults: ${adults}`,
    `Children: ${children}`,
    "",
    `Full name: ${name}`,
    `Email: ${email}`,
    `Phone / WhatsApp: ${phone}`,
    `Special requests: ${notes || "None"}`,
  ].join("\n");

  try {
    const mailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: email,
        subject: `Booking request: ${destination}`,
        text,
      }),
    });

    if (!mailResponse.ok) {
      console.error("Booking email provider returned an error:", mailResponse.status);
      return respond(res, 502, { ok: false, error: "Your request could not be sent right now." });
    }

    return respond(res, 200, { ok: true });
  } catch {
    return respond(res, 502, { ok: false, error: "Your request could not be sent right now." });
  }
}
