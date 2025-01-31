import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import PathBreadcrumb from "@/components/ui/path-breadcrumb";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full ">
          <div className="flex items-center p-2 bg-sidebar ">
            <div className="flex gap-2 items-center  w-full">
              <SidebarTrigger />
              <Separator
                orientation="vertical"
                className="h-6 mx-2 bg-sidebar-border"
              />
              <PathBreadcrumb />
            </div>
            <ModeToggle />
          </div>
          {children}
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}
