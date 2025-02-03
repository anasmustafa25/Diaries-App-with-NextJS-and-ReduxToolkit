import { useDispatch } from 'react-redux';
import { deleteDiary } from '../features/diaries/diariesSlice';

export default function DiaryItem({ diary }) {
  const dispatch = useDispatch();

  return (
    <div className="diary-item">
      <h3>{diary.title}</h3>
      <p>{diary.content}</p>
      <button onClick={() => dispatch(deleteDiary(diary.id))}>Delete</button>
    </div>
  );
}
