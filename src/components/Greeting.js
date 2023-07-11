import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { setGreeting } from '../store/features/greetingSlice';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.greeting);
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery(['greeting'], () => fetch('http://localhost:4000/random-greeting').then((res) => res.json()));

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(setGreeting(data));
    }
  }, [data]);

  return (
    <div className="Greeting">
      <h1>
        Greeting:
        {greeting.title}
      </h1>
    </div>
  );
};

export default Greeting;
