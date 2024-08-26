import AddTalent from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-10/12 mx-auto items-center  p-24">
      <h1 className="text-6xl font-bold text-center">💼 Talenti</h1>
      <p>Save money, hire best talents</p>
      <AddTalent />
      {/* Show Talent */}
    </main>
  );
}
