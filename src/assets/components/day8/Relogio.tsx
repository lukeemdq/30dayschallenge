import { useEffect, useState } from "react";

const Relogio = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setHora(new Date());
    }, 1000);
  }, []);
  return (
    <>
      <p>{hora.toLocaleTimeString()}</p>
    </>
  );
};

export { Relogio };
