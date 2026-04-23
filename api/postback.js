export default async function handler(req, res) {
  const {
    status,
    payout,
    offer_id,
    offer_name,
    ip,
    device,
    sid,
    sid2
  } = req.query;

  const statusText =
    status == 1 ? "✅ Approved" :
    status == 2 ? "❌ Rejected" :
    "⏳ Pending";

  const message = `🎉 Mountaff Congarasocion

🔥 New Lead Received!

📊 Status: ${statusText}
💰 Payout: $${payout}

🎯 Offer ID: ${offer_id}
📛 Offer Name: ${offer_name}

🌍 IP Address: ${ip}
📱 Device: ${device}

🔹 SID1: ${sid}
🔹 SID2: ${sid2}`;

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
