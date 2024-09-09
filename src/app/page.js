import AddTalent from "@/components/add-talent";
import { prisma } from "@/utils/prisma";
import ShowTalent from "@/components/show-talent";
export default async function Home() {
  const talentData = await prisma.talent.findMany();

  //console.log("talent data", talentData);
  return (
    <main className="flex min-h-screen flex-col w-10/12 mx-auto items-center  p-24">
      <h1 className="text-6xl font-bold text-center">💼 Talenti</h1>
      <p>Save money, hire best talents</p>
      <AddTalent />
      <div className="flex flex-wrap justify-between w-10/12 mx-auto gap-4 mt-8">
        {talentData.length > 0 &&
          talentData.map((talent) => (
            <div key={talent.id}>
              <ShowTalent talentData={talent} />
            </div>
          ))}
      </div>
    </main>
  );
}
