export default function handler(req, res) {
  const id = req.query.id || 'NtUHWHdczEk';
  const image = 'https://i.ibb.co/cc9wVQX8/offset.jpg';
  const url = `https://hubstori.vercel.app/post.html?id=${id}`;
  res.setHeader('Content-Type', 'text/html');
  return res.status(200).send(`<!DOCTYPE html><html><head><meta charset="utf-8"><meta property="og:image" content="${image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${image}"><meta http-equiv="refresh" content="0; url=${url}"></head><body></body></html>`);
}
