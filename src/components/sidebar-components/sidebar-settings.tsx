'use client'

import { Cog, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'

export function SidebarSettings() {
  const { theme, setTheme } = useTheme()
  const [isActive, setIsActive] = useState(false)

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu onOpenChange={(open) => setIsActive(open)}>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton tooltip={'Ajustes'}>
                  <Cog
                    className={`duration-500 transition ${isActive ? 'rotate-180' : ''}`}
                  />
                  <span>Ajustes</span>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                collisionPadding={32}
                onAbort={() => setIsActive(false)}
              >
                <DropdownMenuLabel>Ajustes</DropdownMenuLabel>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <div className="flex items-center gap-2">
                      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                      <p>Tema</p>
                      <span className="sr-only">Trocar tema</span>
                    </div>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuRadioGroup
                        value={theme}
                        onValueChange={(value) => setTheme(value)}
                      >
                        <DropdownMenuRadioItem value="light">
                          Claro
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="dark">
                          Escuro
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="system">
                          Automático
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
