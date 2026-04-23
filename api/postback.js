export default async function handler(req, res) {
  const { status, payout } = req.query;

  const message = `🔥 New Lead!\nStatus: ${status}\nPayout: $${payout}`;

  const botToken = "8324019323:AAEe4Rj9OUtDx32hxe5s1FxwKau_9b3oDtA";
  const chatId = "-1003895839348";

  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  });

  res.status(200).send("OK");
}
