import { useParams } from 'react-router';

export default function BookDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detail Buku</h1>
      <p>Kamu sedang melihat detail untuk buku dengan ID: {id}</p>
    </div>
  );
}