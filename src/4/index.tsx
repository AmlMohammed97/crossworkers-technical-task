// Style
import { FunctionComponent, useState } from "react";
import "./index.scss";

const Task5: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // If you want to do something with form submit

    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-5"> {/* id should be task-4 */}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            onChange={(event) => setEmail(event.currentTarget.value)}
            value={email}
            placeholder="Type your email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
            placeholder="Type your password"
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Task5;
