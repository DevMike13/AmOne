import Image from "next/image";
import Intro from './components/intro/Intro';

export default function Home() {
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <Intro />
    </div>
  );
}
