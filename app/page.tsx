import Image from "next/image";
import Button from "@ui/Button";
import Input from "@ui/Input";


export default function Home() {
  return (
    <div className="flex w-full h-full items-center justify-center min-h-screen gap-4">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Button>Click me</Button>
          <Button intent="secondary">Click me</Button>
          <Button intent="accent">Click me </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button intent="gradient">Click me</Button>
          <Button intent="danger"> Click me </Button> 
          <Button intent="outline">Click me </Button>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Input placeholder="Some text..." />
          <Input placeholder="Some text..." type="number" />
          <Input placeholder="Some text..." type="datetime-local" />
          
        </div>
      </div>
    </div>
  );
}
