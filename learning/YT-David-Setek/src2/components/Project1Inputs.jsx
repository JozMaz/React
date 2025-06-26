import { useState } from "react";

const Project1Input = () => {
  const [jmeno, setJmeno] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  function formSubmit(event) {
    event.preventDefault();
    if (jmeno && email) {
      const uzivatel = { jmeno: jmeno, email: email };
      setUsers((users) => [...users, uzivatel]);
    } else {
      console.log("Zadej udaje!");
    }

    setJmeno("");
    setEmail("");
  }
  function changeJmenoHandler(event) {
    setJmeno(event.target.value);
  }
  function changeEmailHandler(event) {
    setEmail(event.target.value);
  }

  return (
    <article>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Jmeno"
          value={jmeno}
          onChange={changeJmenoHandler}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={changeEmailHandler}
        />
        <input type="submit" value="ok" />
      </form>
      {users.map((user, index) => (
        <div key={index} className="item">
          <p>{user.jmeno}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </article>
  );
};

export default Project1Input;
