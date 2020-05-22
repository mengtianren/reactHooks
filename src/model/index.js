import { useState } from "react";
import { createModel } from "hox";
const useTodo = ()=> {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  return {
    count,
    add
  };
}
export const useTodoModel = createModel(useTodo);
