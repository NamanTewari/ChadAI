"use client"
import Image from "next/image";
import {Button} from "@/components/ui/button"
import {useTheme} from "next-themes";

export default function Home() {
  const {setTheme} = useTheme();
  return (
   <div>
    hello ji
    <Button>Button</Button>
    <Button onClick={()=>setTheme('dark')}>DarkMode</Button>
    <Button onClick={()=>setTheme('light')}>LightMode</Button>
   </div>
    
  );
}
