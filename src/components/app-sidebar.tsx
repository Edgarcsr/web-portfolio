import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { SidebarProfileComponent } from './sidebar-components/sidebar-profile-component'
import { SidebarSettings } from './sidebar-components/sidebar-settings'

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <SidebarProfileComponent />
      </SidebarHeader>
       
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarSettings />
      </SidebarFooter>
    </Sidebar>
  )
}
