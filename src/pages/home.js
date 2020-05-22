import React from "react";
import {useTodoModel} from "@/model/index"

function Home({history}) {
  const counter  = useTodoModel ();
  console.log(history)
  const user =()=>{
    history.push('/user')
  }

  return <div className="App">
    {counter.count}
    123
    <button onClick={counter.add}>
      add
    </button>
    <button onClick={user}>user</button>
  </div>;
}

export default Home;
