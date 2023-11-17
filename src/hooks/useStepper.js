import { useState } from 'react';

const useStepper = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return { selectedDate, setSelectedDate };
};

export default useStepper;
