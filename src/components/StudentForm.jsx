import React, { useState } from "react";

const StudentForm = () => {
	const [dataList, setDataList] = useState([]);
	const [nim, setNim] = useState("");
	const [nama, setNama] = useState("");
	const [mataKuliah, setMataKuliah] = useState("");
	const [tanggalUjian, setTanggalUjian] = useState("");
	const [nilaiUjian, setNilaiUjian] = useState("");
	const [indeksNilai, setIndeksNilai] = useState("");

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
			grade = "C";
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

		setNim("");
		setNama("");
		setMataKuliah("");
		setTanggalUjian("");
		setNilaiUjian("");
		setIndeksNilai("");
	};

	return (
		<div>
			<h1 className="py-10 text-3xl">Form Input Data Mahasiswa dan Ujian</h1>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col justify-center gap-5">
					<div>
						<label htmlFor="nim">NIM: </label>
						<input
							type="text"
							id="nim"
							value={nim}
							onChange={(e) => setNim(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="nama">Nama: </label>
						<input
							type="text"
							id="nama"
							value={nama}
							onChange={(e) => setNama(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="mataKuliah">Mata Kuliah: </label>
						<input
							type="text"
							id="mataKuliah"
							value={mataKuliah}
							onChange={(e) => setMataKuliah(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="tanggalUjian">Tanggal Ujian: </label>
						<input
							type="date"
							id="tanggalUjian"
							value={tanggalUjian}
							onChange={(e) => setTanggalUjian(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="nilaiUjian">Nilai Ujian: </label>
						<input
							className="w-10"
							type="number"
							id="nilaiUjian"
							value={nilaiUjian}
							min="0"
							max="100"
							onChange={(e) => handleNilaiUjianChange(Number(e.target.value))}
							required
						/>
					</div>
					<div>
						<label htmlFor="indeksNilai">Indeks Nilai:</label>
						<input
							className="w-10"
							type="text"
							id="indeksNilai"
							value={indeksNilai}
							readOnly
						/>
					</div>
				</div>
				<div className="flex justify-center items-center py-10">
					<button
						type="submit"
						className="bg-white rounded-sm hover:bg-slate-700 hover:text-white px-4 py-2"
					>
						Simpan
					</button>
				</div>
			</form>

			{/* Tabel untuk menampilkan data */}
			<h1 className="mb-10 text-3xl">Data Mahasiswa dan Nilai Ujian</h1>
			<table>
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
