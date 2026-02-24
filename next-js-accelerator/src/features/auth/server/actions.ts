"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const logout = async () => {
  revalidatePath("/");
  redirect("/api/auth/signout?callbackUrl=/");
};
