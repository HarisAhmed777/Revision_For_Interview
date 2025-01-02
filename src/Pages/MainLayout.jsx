import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider,SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
const MainLayout = () => {
  return (
    <SidebarProvider>
        <AppSidebar />
        <div className='ps-3 mt-3'>
        <SidebarTrigger/>
        </div>
        <div className='mt-14'>
        <Outlet />
        </div>
    </SidebarProvider>
  );
};

export default MainLayout;
