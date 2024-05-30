import Image from "next/image";
import Button from "@ui/Button";

export default function Home() {
  return (
    <div className="flex w-full h-full items-center justify-center min-h-screen gap-4">
      <Button text="Click me"/>
      <Button text="Click me" intent="secondary"/>
      <Button text="Click me" intent="accent"/>
      <Button text="Click me" intent="gradient"/>
      <Button text="Click me" intent="danger"/>
    </div>
  );
}
