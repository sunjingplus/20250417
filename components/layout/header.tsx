import { getServerSession } from "next-auth";
import NavBar from "./navbar";

export async function Header() {
  return (
    <div className="sticky z-30">
      <NavBar />
    </div>
  );
}
