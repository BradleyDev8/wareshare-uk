import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="hero min-h-screen justify-center flex align-middle items-center bg-base-200">
      <div className="text-center">
        <SignIn />
      </div>
    </div>
  );
}
