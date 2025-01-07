"use server";

import { signOut } from "@/auth";

export async function Signout() {
	await signOut();
}
