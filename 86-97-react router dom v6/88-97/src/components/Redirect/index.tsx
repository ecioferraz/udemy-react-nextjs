import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Redirect() {
  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((currTime) => currTime - 1);
    }, 1000);

    if (time <= 0) {
      navigate('/about', { state: `This is the state: ${Math.round(Math.random() * 10)}` });
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [time]);

  return (
    <div>
      <h1>Get out of here in: {time}</h1>
    </div>
  );
}
