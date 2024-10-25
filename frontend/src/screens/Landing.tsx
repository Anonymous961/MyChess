import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export function Landing() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className=" max-w-screen-lg pt-8 flex justify-between">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center">
            <img src={"/chessboard.png"} alt="" className="max-w-96" />
          </div>
          <div className="pt-160">
            <div className="flex justify-center flex-col">
              <h1 className="text-5xl font-bold text-white">
                Welcome to Chess
              </h1>
              <p className="text-xl mt-2 text-white">
                Play chess online on the #2 Site!
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <Button onClick={() => navigate("/game")}>Play</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
