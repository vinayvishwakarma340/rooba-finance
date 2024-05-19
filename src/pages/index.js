
import { Inter } from "next/font/google";
import Event from "../components/Event";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <Event />
   </div>
  );
}
