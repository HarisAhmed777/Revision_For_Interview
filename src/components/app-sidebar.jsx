import * as React from "react"
import { ChevronRight } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
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
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "React",
      url: "#",
      items: [
        {
          title: "JSX",
          url: "/jsx",
        },
        {
          title: "Props",
          url: "/props",
        },
        {
            title: "Props Drilling",
            url: "/propsDrilling",
        },
        {
            title: "Hooks",
            url: "/hooks",
        },
        {
          title: "Context API",
          url: "#",
        },
        {
          title: "Life Cycle Methods",
          url: "#",
        },
        {
          title: "Componnets",
          url: "#",
        },
        {
          title: "React Router",
          url: "#",
        },
        {
          title: "Function and Class Components",
          url: "#",
        },
        {
          title: "React List ",
          url: "#",
        },
        {
          title: "State",
          url: "#",
        },
        {
          title: "Component Rendering",
          url: "#",
        },
        {
          title: "Conditional Rendering",
          url: "#",
        },
        {
          title: "HOC",
          url: "#",
        },
        {
          title: "List and keys",
          url: "#",
        },
        {
          title: "Controlled and Uncontrolled Components",
          url: "#",
        },
        {
          title: "Event Handling",
          url: "#",
        },
        {
          title: "Lazy Loading",
          url: "#",
        },
      ],

    },
    {
      title: "JavaScript",
      url: "#",
      items: [
        {
          title: "Js Basics",
          url: "/var_let_const",
        },
        {
          title: "Array Method",
          url: "#",
          // isActive: true,
        },
        {
          title: "Object",
          url: "#",
        },
        {
          title: "Async",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
        {
          title: "Arrow Function",
          url: "#",
        },
        {
          title: "CallBacks",
          url: "#",
        },
        {
          title: "Defining and invoking fucntions",
          url: "#",
        },
        {
          title: "Hoisting",
          url: "#",
        },
        {
          title: "Closure",
          url: "#",
        },
        {
          title: "Scope",
          url: "#",
        },
        {
          title: "promises",
          url: "#",
        },
        {
          title: "Class",
          url: "#",
        },
        {
          title: "Promises",
          url: "#",
        },
        {
          title: "Inheritance",
          url: "#",
        },
        {
          title: "destructing",
          url: "#",
        },
        {
          title: "prototype",
          url: "#",
        },
        {
          title: "prototype based inheritance",
          url: "#",
        },
        {
          title: "spread operator",
          url: "#",
        },
        {
          title: "error handling",
          url: "#",
        },
        {
          title: "event listerns",
          url: "#",
        },
        {
          title: "IIFE",
          url: "#",
        },
        {
          title: "Generators",
          url: "#",
        },
      ],
    },
    {
      title: "Node JS",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
        {
          title: "next.config.js Options",
          url: "#",
        },
        {
          title: "CLI",
          url: "#",
        },
        {
          title: "Edge Runtime",
          url: "#",
        },
      ],
    },
    {
      title: "Mongodb",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "Next.js Compiler",
          url: "#",
        },
        {
          title: "Supported Browsers",
          url: "#",
        },
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
    {
      title: "C++",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
    {
        title: "Java",
        url: "#",
        items: [
          {
            title: "Contribution Guide",
            url: "#",
          },
        ],
      },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight
                    className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>)
  );
}
