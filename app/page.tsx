import { Homepage } from "./component/Home"
import { ResponsiveNav } from "./component/Navigation/ResponsiveNav";

export default function Home() {
  return (
    <div className="bg-[#f4f1ea]">
      <ResponsiveNav />
      <Homepage />
    </div>
  );
}
