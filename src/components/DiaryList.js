import { useSelector } from 'react-redux';
import DiaryItem from './DiaryItem';

 function DiaryList() {
  const diaries = useSelector((state) => state.diaries.diaries);

  return (
    <div>
      {diaries.length > 0 ? (
        diaries.map(diary => <DiaryItem key={diary.id} diary={diary} />)
      ) : (
        <p>No diary entries yet.</p>
      )}
    </div>
  );
}
export default DiaryList;
