document.addEventListener('DOMContentLoaded', function () {
  const jenisKalkulasi = document.querySelectorAll('input[name="jenis-kalkulasi"]');
  const panjangSisiInput = document.getElementById('panjang-sisi');
  const hasilKalkulasi = document.getElementById('hasil-kalkulasi');
  const hitungButton = document.getElementById('hitung');
  const resetButton = document.getElementById('reset');

  hitungButton.addEventListener('click', function () {
      const jenisKalkulasiTerpilih = document.querySelector('input[name="jenis-kalkulasi"]:checked').value;
      const panjangSisi = parseFloat(panjangSisiInput.value);

      if (!isNaN(panjangSisi)) {
          if (jenisKalkulasiTerpilih === 'luas') {
              const luas = panjangSisi * panjangSisi;
              hasilKalkulasi.textContent = luas;
          } else if (jenisKalkulasiTerpilih === 'keliling') {
              const keliling = 4 * panjangSisi;
              hasilKalkulasi.textContent = keliling;
          }
      } else {
          hasilKalkulasi.textContent = 'Error';
      }
  });

  resetButton.addEventListener('click', function () {
      panjangSisiInput.value = '';
      hasilKalkulasi.textContent = '-';
  });
});
