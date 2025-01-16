import { FC, ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <div className="flex flex-row items-center h-max">
            <Image src="/logo.svg" height={40} width={40} alt="logo" />
            <p className="pl-1 text-xl font-bold">Jira Clone</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary">Sign Up</Button>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
