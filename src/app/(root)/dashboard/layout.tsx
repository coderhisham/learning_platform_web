import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import PathBreadcrumb from "@/components/ui/path-breadcrumb";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen p-2 pt-4 ">
        <div className="sticky top-4 z-10 flex items-center p-2 bg-sidebar rounded-2xl border border-sidebar-border shadow-md w-full">
          <div className="flex gap-2 items-center w-full">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="h-6 mx-2 bg-sidebar-border"
            />
            <PathBreadcrumb />
          </div>
          <ModeToggle />
        </div>
        <div className="flex-1 h-screen flex justify-center items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-accent">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
