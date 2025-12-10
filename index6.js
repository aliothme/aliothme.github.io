// HANYA UNTUK TUJUAN EDUKASI & PELATIHAN KEAMANAN
function steal() {
  const nama = document.getElementById('reg_nama').value;
  const email = document.getElementById('reg_email').value;
  const nohp = document.getElementById('reg_nohp').value;

  if (email || nama || nohp) {
    console.log("[!] DATA AUTOFILL TERCURI:", { nama, email, nohp });

    // Hanya untuk demo — tidak dikirim ke server mana pun
    alert(`⚠️ DEMO PENDIDIKAN ⚠️\n\nJika ini situs jahat, data berikut sudah dicuri:\n\nNama: ${nama}\nEmail: ${email}\nNo. HP: ${nohp}\n\nJANGAN PERNAH tekan Enter/Down/Enter di situs mencurigakan!`);

  }
}
