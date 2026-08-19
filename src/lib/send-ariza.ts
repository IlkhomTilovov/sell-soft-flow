import { createServerFn } from "@tanstack/react-start";

export type ArizaPayload = {
  ism: string;
  tel: string;
  telegram: string;
  soha: string;
  tarif: string;
  kerak: string;
};

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function clean(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export const sendAriza = createServerFn({ method: "POST" })
  .inputValidator((data: ArizaPayload): ArizaPayload => {
    const payload = {
      ism: clean(data?.ism, 100),
      tel: clean(data?.tel, 30),
      telegram: clean(data?.telegram, 100),
      soha: clean(data?.soha, 200),
      tarif: clean(data?.tarif, 200),
      kerak: clean(data?.kerak, 1000),
    };
    if (!payload.ism || !payload.tel || !payload.tarif) {
      throw new Error("Majburiy maydonlar to'ldirilmagan");
    }
    return payload;
  })
  .handler(async ({ data }) => {
    const token = process.env["TELEGRAM_BOT_TOKEN"];
    const chatId = process.env["TELEGRAM_CHAT_ID"];
    if (!token || !chatId) {
      console.error("TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID sozlanmagan");
      throw new Error("Server sozlanmagan");
    }

    const lines = [
      "🆕 <b>Yangi ariza — Sell Soft</b>",
      "",
      `👤 <b>Ism:</b> ${esc(data.ism)}`,
      `📞 <b>Telefon:</b> ${esc(data.tel)}`,
      data.telegram && `💬 <b>Telegram:</b> ${esc(data.telegram)}`,
      data.soha && `🏢 <b>Soha:</b> ${esc(data.soha)}`,
      `📦 <b>Paket:</b> ${esc(data.tarif)}`,
      data.kerak && `📝 <b>Izoh:</b> ${esc(data.kerak)}`,
    ].filter(Boolean);

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join("\n"),
        parse_mode: "HTML",
      }),
    });

    if (!res.ok) {
      console.error("Telegram sendMessage xatosi:", res.status, await res.text());
      throw new Error("Xabar yuborilmadi");
    }

    return { ok: true };
  });
