import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-cols-10 gap-4 p-4">
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="outline">outline</Button>
      <Button variant="muted">muted</Button>
      <Button variant="tertiary">tertiary</Button>
    </div>
  );
}
