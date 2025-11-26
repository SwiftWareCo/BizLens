import * as React from 'react';
import { LayoutDashboard, Settings, Wrench, Sparkles } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Platform',
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          icon: LayoutDashboard,
          isActive: true,
        },
        {
          title: 'Tools',
          url: '/dashboard/tools',
          icon: Wrench,
        },
        {
          title: 'Settings',
          url: '/dashboard/settings',
          icon: Settings,
        },
      ],
    },
    {
      title: 'Tools',
      items: [
        {
          title: 'Brand Audit',
          url: '/dashboard/tools/brand-audit',
          icon: Sparkles,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className='flex items-center gap-2 px-4 py-2'>
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground'>
            <LayoutDashboard className='size-4' />
          </div>
          <div className='font-semibold'>BizLens</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
