import { useLocation } from 'react-router-dom';

export default function About() {
  const { state } = useLocation();
  return (
    <div>
      <h1>About</h1>
      <p>{state}</p>
    </div>
  );
}
