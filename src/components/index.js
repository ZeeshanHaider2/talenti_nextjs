"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as actions from "@/actions";

const AddTalent = () => {
  const [first, setFirst] = useState(false);
  return (
    <div className="w-full mt-8">
      <form action={actions.firstServerAction} className="flex flex-col gap-2">
        <Label htmlFor="terms">Name</Label>
        <Input type="text" placeholder="name" />
        <Label htmlFor="email">Email</Label>
        <Input type="text" placeholder="email" />
        <Label htmlFor="terms">Title</Label>
        <Input type="text" placeholder="title" />
        <Label htmlFor="terms">Skills</Label>
        <textarea
          type="text"
          name="skills"
          className="w-full font-normal outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
        ></textarea>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default AddTalent;
