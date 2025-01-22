import UserButton from "@/features/auth/components/user-button";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface StandaloneLayoutProps {
  children: ReactNode;
}

const StandaloneLayout: FC<StandaloneLayoutProps> = ({ children }) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto mx-w-screen-2xl p-4">
        <nav className="flex justify-between items-center h-[73px]">
          <Link href="/">
            <div className="flex flex-row items-center h-max">
              <Image src="/logo.svg" height={40} width={40} alt="logo" />
              <p className="pl-1 text-xl font-bold">Jira Clone</p>
            </div>
          </Link>
          <UserButton />
        </nav>
        <div className="flex flex-col items-center justify-center py-4">
          {children}
        </div>
      </div>
    </main>
  );
};

export default StandaloneLayout;
