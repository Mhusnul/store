import React, { useEffect, useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router";

function LoginForm() {
  const [form, setForm] = useState({
    email: "john@mail.com",
    password: "changeme",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(form.email, form.password);
      window.dispatchEvent(new Event("login"));
      navigate("/others");
    } catch (error) {
      alert("gagal login :" + error.message);
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 justify-items-center py-5 ">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 w-sm md:w-lg">
          <legend className="fieldset-legend text-2xl font-bold">Masuk</legend>

          <hr />
          <p className="mb-5">
            Apabila Anda memiliki akun, Masuk dengan alamat email.
          </p>

          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <label className="label">Kata Sandi</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            type="submit"
            className="btn btn-neutral mt-4 mb-2 hover:bg-white hover:text-black"
          >
            Login
          </button>
          <a href="" className="text-blue-500 underline text-center">
            Lupa kata sandi?
          </a>
        </fieldset>
      </form>

      <form className="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 w-sm md:w-lg">
          <legend className="fieldset-legend text-2xl font-bold">Daftar</legend>

          <hr />
          <p className="mb-5">
            Buat Akun dan dapatkan banyak keuntungan: Pembayaran lebih cepat,
            Menyimpan lebih banyak alamat, lacak pesanan Anda dan banyak lagi!
          </p>

          <label className="label">Nama Depan</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Nama Depan"
            required
          />

          <label className="label">Nama Belakang</label>
          <input
            type="text"
            className="input w-full mb-5"
            placeholder="Nama Belakang"
            required
          />

          <label className="label">Tanggal Lahir</label>
          <label className="input w-full">
            <input type="date" />
          </label>

          <label className="label">Jenis Kelamin</label>
          <label className="select mb-5 w-full">
            <select>
              <option>Pria</option>
              <option>Wanita</option>
            </select>
          </label>

          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            required
          />

          <label className="label">kata Sandi</label>
          <input
            type="password"
            className="input w-full mb-5"
            placeholder="Password"
            required
          />

          <label className="label">Konfirmasi Kata Sandi</label>
          <input
            type="password"
            className="input w-full mb-5"
            placeholder="Masukan Password Anda Kembali"
            required
          />

          <button className="btn btn-neutral mt-4 hover:bg-white hover:text-black">
            Daftar
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default LoginForm;
