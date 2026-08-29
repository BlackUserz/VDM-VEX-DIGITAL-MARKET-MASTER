exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };
  if (!process.env.KIE_API_KEY) return { statusCode: 503, body: JSON.stringify({error:'AI backend belum dikonfigurasi'}) };
  return { statusCode: 501, body: JSON.stringify({error:'KIE adapter belum dikonfigurasi; gunakan endpoint/model resmi dari akun KIE.'}) };
};
