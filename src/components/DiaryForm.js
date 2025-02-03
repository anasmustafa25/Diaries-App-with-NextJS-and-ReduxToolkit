import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDiary } from '../features/diaries/diariesSlice';

export default function DiaryForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      dispatch(addDiary({ id: Date.now(), title, content }));
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="diary-form">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Write your diary entry..." value={content} onChange={(e) => setContent(e.target.value)} required />
      <button type="submit">Add Diary</button>
    </form>
  );
}
