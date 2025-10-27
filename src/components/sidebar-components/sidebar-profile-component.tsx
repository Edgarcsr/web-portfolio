import Image from 'next/image'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'

export function SidebarProfileComponent() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size={'lg'} tooltip={'Sobre'}>
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
            <Image
              src={'/avatar.webp'}
              width={2088}
              height={2088}
              alt="Imagem de Edgar"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="truncate font-medium">Edgar C S Ribeiro</span>
            <span className="truncate text-xs text-gray-400">
              Eng. da computação
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
