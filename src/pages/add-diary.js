import Link from 'next/link';
import DiaryForm from '@/components/DiaryForm';


export default function AddDiary() {
  return (
    <div>
      <h1>Add a New Diary</h1>
      <DiaryForm />
      <Link href="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}
