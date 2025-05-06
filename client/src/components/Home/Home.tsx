import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col space-y-3">
        <Button onClick={() => navigate("/post")}>
          Aunthentication with JWT
        </Button>
        {/* <Button onClick={handleLogin}>Posts</Button>
        <Button onClick={handleLogin}>AI model integragtion</Button> */}
      </div>
    </>
  );
}
