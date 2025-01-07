import { auth } from "@/auth";
import Image from "next/image";
import { Signout } from "./signout";
import { SignIn } from "./signin";

export default async function Home() {
	const Auth = await auth();
	console.log(Auth);

	return (
		<>
			<div className="flex mt-60 ml-40">
				{!Auth?.user ? (
					<form action={SignIn}>
						<button type="submit">Sign In</button>
					</form>
				) : (
					<>
						<h1 className="mx-10">{Auth?.user?.name}</h1>
						<Image
							className="rounded-full"
							width={34}
							height={34}
							src={Auth?.user?.image}
							alt=""
						/>
						<p className="mx-10">{Auth?.user?.email}</p>
						<form action={Signout}>
							<button type="submit">Sign out</button>
						</form>
					</>
				)}
			</div>
		</>
	);
}
