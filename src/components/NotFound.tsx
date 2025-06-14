import { Link } from 'react-router-dom';
import { TriangleAlert } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-yellow-100 flex items-center justify-center text-center p-4">
      <div>
        <img src={"../public/icon/NotFound.png"} alt="Not Found" className="w-52 h-44 mx-auto mb-4" />
        <h1 className="mt-6 text-6xl font-bold font-yuruka text-gray-800">404</h1>
        <p className="mt-2 text-2xl text-gray-600">Halaman Tidak Ditemukan</p>
        <p className="mt-4 text-gray-500">Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.</p>
        <Link
          to="/"
          className="mt-8 inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform"
        >
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
}