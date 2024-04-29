import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" min-h-screen justify-center flex align-middle items-center ">
      <div className="text-center">
        <SignUp path="/sign-up" />
      </div>
    </div>
  );
}
