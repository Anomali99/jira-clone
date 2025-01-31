import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import DottedSeparator from "./dotted-separator";
import Navigation from "./navigation";
import WorkspaceSwitcher from "./workspace-switcher";
import Projects from "./projects";

const Sidebar: FC = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <div className="flex flex-row items-center h-max">
          <Image src="/logo.svg" height={40} width={40} alt="logo" />
          <p className="pl-1 text-xl font-bold">Jira Clone</p>
        </div>
      </Link>
      <DottedSeparator className="my-4" />
      <WorkspaceSwitcher />
      <DottedSeparator className="my-4" />
      <Navigation />
      <DottedSeparator className="my-4" />
      <Projects />
    </aside>
  );
};

export default Sidebar;
