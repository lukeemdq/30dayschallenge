import { useState } from "react";

export const FormLayout = () => {
  const [email, setemail] = useState<string>("");
  const [name, setname] = useState<string>("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setname(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setemail(e.target.value);
  };

  return (
    <>
      <form action="">
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Coloque email"
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        />
        <button type="submit">Enviar</button>
      </form>
      <p>{name}</p>
      <p>{email}</p>
    </>
  );
};
