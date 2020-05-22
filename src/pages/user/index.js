import React, { useState } from "react";

const User = () => {
  const [name, setName] = useState("user");
  const pass = () => setName("你好");
  return <div onClick={pass}>{name}</div>;
};

export default User;
// export default class User extends Component {
//   render() {
//     return <div>user</div>;
//   }
// }
