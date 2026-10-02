import { Link } from 'react-router';


function Books() {
  return (
     <div>
      <h1>Katalog Buku</h1>
      <p>Pilih salah satu buku di bawah ini untuk melihat detailnya:</p>
      <ul>
        <li>
          <Link to="/books/1">Buku 1: Belajar React Router v6</Link>
        </li>
        <li>
          <Link to="/books/2">Buku 2: Kuasai JavaScript Modern</Link>
        </li>
        <li>
          <Link to="/books/3">Buku 3: Panduan Frontend Developer</Link>
        </li>
      </ul>
    </div>
  )
}

export default Books