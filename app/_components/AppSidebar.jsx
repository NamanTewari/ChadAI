'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes";
export function AppSidebar() {

    const{theme ,setTheme} = useTheme();
      const [mounted, setMounted] = useState(false);
     useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Sidebar>
      <SidebarHeader >
        <div>
        <div className = "p-3 flex justify-between items-center">
        <div className = "flex items-center gap-3">
        <Image src = {'/logo.svg'} alt = "logo" width = {60}
        height = {60} className = "w-[40px] h-[40px]"
        />
        <h2 className = "font-bold text-xl">CHAD AI</h2>
        </div>
        
        {/* toggle  */}
        <div>
          { theme == 'light'?  <Button variant ={'ghost'}
            onClick={()=>setTheme('dark')}
            ><Moon/></Button>
                    :<Button variant = {'ghost'}
                     onClick={()=>setTheme('light')}
                    ><Sun/></Button>}
        </div>
        </div>
        <Button className = 'mt-7 w-full'>New Chat</Button>
        </div>

        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup  >
            <div className = {'p-3'}>
            <h2 className = "font-bold text-lg">Chat </h2>
            <p className = "text-sm text-gray-500" >SignIn to Chat with Different AI models</p>
            </div>
        </SidebarGroup>
        
      </SidebarContent>
      <SidebarFooter >
        <div className = {'p-3 mb-10' }>
            <Button className = {'w-full'} size = {'lg'}>SignIn/SignUp</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}