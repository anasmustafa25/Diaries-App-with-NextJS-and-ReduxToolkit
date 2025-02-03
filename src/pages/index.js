import Link from 'next/link';
// import DiaryList from '../src/components/DiaryList';
import DiaryList from '@/components/DiaryList';
export default function Home() {
  return (
    <div>
      <h1>My Diaries</h1>
      <Link href="/add-diary">
        <button>Add New Diary</button>
      </Link>
      <DiaryList />
    </div>
  );
}
