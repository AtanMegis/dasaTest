import React, { useState } from 'react';

const StudentForm = () => {
  const [dataList, setDataList] = useState([]);
  const [nim, setNim] = useState('');
  const [nama, setNama] = useState('');
  const [mataKuliah, setMataKuliah] = useState('');
  const [tanggalUjian, setTanggalUjian] = useState('');
  const [nilaiUjian, setNilaiUjian] = useState('');
  const [indeksNilai, setIndeksNilai] = useState('');

  const handleNilaiUjianChange = (nilai) => {
    setNilaiUjian(nilai);
    determineGrade(nilai);
  };

  const determineGrade = (nilaiUjian) => {
    let grade;

    if (nilaiUjian > 80) {
      grade = "A";
    } else if (nilaiUjian >= 70 && nilaiUjian <= 80) {
      grade = "B";
    } else if (nilaiUjian >= 55 && nilaiUjian < 70) {
      grade = "G";
    } else if (nilaiUjian >= 40 && nilaiUjian < 55) {
      grade = "D";
    } else {
      grade = "E";
    }

    setIndeksNilai(grade);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      NIM: nim,
      Nama: nama,
      "Mata Kuliah": mataKuliah,
      "Tanggal Ujian": tanggalUjian,
      "Nilai Ujian": nilaiUjian,
      "Indeks Nilai": indeksNilai,
    };
    setDataList([...dataList, newData]);
    //! Reset nilai input setelah submit
    setNim('');
    setNama('');
    setMataKuliah('');
    setTanggalUjian('');
    setNilaiUjian('');
    setIndeksNilai('');
  };


  return (
    <div>
      <h2>Form Input Data Mahasiswa dan Ujian</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nim">NIM:</label>
          <input type="text" id="nim" value={nim} onChange={(e) => setNim(e.target.value)} />
        </div>
        <div>
          <label htmlFor="nama">Nama:</label>
          <input type="text" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
        </div>
        <div>
          <label htmlFor="mataKuliah">Mata Kuliah:</label>
          <input type="text" id="mataKuliah" value={mataKuliah} onChange={(e) => setMataKuliah(e.target.value)} />
        </div>
        <div>
          <label htmlFor="tanggalUjian">Tanggal Ujian:</label>
          <input type="date" id="tanggalUjian" value={tanggalUjian} onChange={(e) => setTanggalUjian(e.target.value)} />
        </div>
        <div>
          <label htmlFor="nilaiUjian">Nilai Ujian:</label>
          <input type="number" id="nilaiUjian" value={nilaiUjian} onChange={(e) => handleNilaiUjianChange(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="indeksNilai">Indeks Nilai:</label>
          <input type="text" id="indeksNilai" value={indeksNilai} readOnly />
        </div>
        <button type="submit">Simpan</button>
      </form>
      {/* Tabel untuk menampilkan data */}
      <h2>Data Mahasiswa dan Nilai Ujian</h2>
      <table border="1">
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Tanggal Ujian</th>
            <th>Nilai Ujian</th>
            <th>Indeks Nilai</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data, index) => (
            <tr key={index}>
              <td>{data.NIM}</td>
              <td>{data.Nama}</td>
              <td>{data["Mata Kuliah"]}</td>
              <td>{data["Tanggal Ujian"]}</td>
              <td>{data["Nilai Ujian"]}</td>
              <td>{data["Indeks Nilai"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



  );
};

export default StudentForm;
