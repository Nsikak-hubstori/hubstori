export default function handler(req, res) {
  const id = req.query.id || 'NtUHWHdczEk';
  const image = 'https://i.ibb.co/cc9wVQX8/offset.jpg';
  const title = 'Watch on hubstori 🔥';
  const url = `https://hubstori.vercel.app/post.html?id=${id}`;
  res.setHeader('Content-Type', 'text/html');
  return res.status(200).send(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title><meta property="og:title" content="${title}"><meta property="og:description" content="Tap 🔊 to unmute | @hubstori"><meta property="og:url" content="${url}"><meta property="og:image" content="${image}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${image}"><meta http-equiv="refresh" content="0; url=${url}"></head><body>Loading...</body></html>`);
}
