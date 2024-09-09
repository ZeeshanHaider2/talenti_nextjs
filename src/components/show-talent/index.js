import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as actions from "@/actions";

const ShowTalent = ({ talentData }) => {
  return (
    <Card className="w-[300px] h-[330px]">
      <CardHeader>
        <CardTitle className="text-4xl">{talentData.name}</CardTitle>
        <CardDescription>{talentData.title}</CardDescription>
        <CardDescription>{talentData.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{talentData.skills}</p>
        <div className="flex gap-4 my-4">
          <form action={actions.deleteTalent}>
            <input type="hidden" name="inputID" value={talentData.id} />
            <button className="bg-red-500 px-6 py-2 rounded text-white">
              Delete
            </button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShowTalent;
