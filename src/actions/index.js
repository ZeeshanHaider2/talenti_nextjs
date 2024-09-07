"use server";
import { prisma } from "@/utils/prisma";
export async function createTalent(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const title = formData.get("title");
  const skills = formData.get("skills");

  await prisma.talent.create({
    data: {
      title: title,
      name: name,
      email: email,
      skills: skills,
    },
  });
}
