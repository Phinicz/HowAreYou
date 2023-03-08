import Login from "./Login";
import { getServerSession } from "next-auth";

export default async function Nav() {
  const session = await getServerSession();
  return (
    <ul className="flex items-center gap-6 justify-between py-5 px-2">
      <li>PostIT</li>
      <Login />
    </ul>
  );
}
