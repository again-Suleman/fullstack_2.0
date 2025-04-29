import { MouseEventHandler } from "react";
import { Button } from "../ui/button";

export default function Home() {
  const handleLogin: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e.currentTarget.innerText);
  };
  return (
    <>
      <Button onClick={handleLogin}>Login Here</Button>
    </>
  );
}
