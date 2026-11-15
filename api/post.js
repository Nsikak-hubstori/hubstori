export default async function handler(req, res) {
  const id = req.query.id;
  const videosUrl = 'https://hubstori.vercel.app/videos.json';
  const thumbsUrl = 'https://hubstori.vercel.app/thumbnails.json';

  let videos = [];
  let thumbs = {};
  try { videos = await (await fetch(videosUrl)).json(); } catch(e){}
  try { thumbs = await (await fetch(thumbsUrl)).json(); } catch(e){}

  const video = videos.find(v => String(v.id) === String(id)) || {};
  const rawThumb = video.thumbnail || thumbs[id] || '';
  const image = rawThumb.startsWith('http') ? rawThumb : 'https://i.ibb.co/cc9wVQX8/offset.jpg';
  const title = video.desc || 'Watch on hubstori 🔥';
  const url = `https://hubstori.vercel.app/post.html?id=${id}`;

  res.setHeader('Content-Type', 'text/html');
  return res.status(200).send(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title><meta property="og:type" content="website"><meta property="og:title" content="${title}"><meta property="og:description" content="Tap 🔊 to unmute | @hubstori"><meta property="og:url" content="${url}"><meta property="og:image" content="${image}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="Tap 🔊 to unmute | @hubstori"><meta name="twitter:image" content="${image}"><meta http-equiv="refresh" content="0; url=${url}"></head><body>Loading...</body></html>`);
    }
