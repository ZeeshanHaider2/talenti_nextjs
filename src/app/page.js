import AddTalent from "@/components/add-talent";
import { prisma } from "@/utils/prisma";

export default async function Home() {
  const talentData = await prisma.talent.findMany();

  console.log("talent data", talentData);
  return (
    <main className="flex min-h-screen flex-col w-10/12 mx-auto items-center  p-24">
      <h1 className="text-6xl font-bold text-center">💼 Talenti</h1>
      <p>Save money, hire best talents</p>
      <AddTalent />
      {/* Show Talent */}
      {talentData.length > 0 &&
        talentData.map((talent) => <div key={talent.id}>{talent.name}</div>)}
    </main>
  );
}
