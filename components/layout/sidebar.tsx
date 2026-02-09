"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, PieChart, List, Settings, WalletCards, User } from "lucide-react"
import { cn } from "@/lib/utils"

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    label: "Transactions",
    icon: List,
    href: "/transactions",
  },
  {
    label: "Categories",
    icon: PieChart,
    href: "/categories",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-background/50 backdrop-blur-xl py-6 px-4">
      {/* HEADER / LOGO */}
      <div className="px-2 mb-12">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-sm shadow-emerald-500/20 transition-transform group-hover:scale-105">
             <WalletCards className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground/90">
            CuanKu
          </span>
        </Link>
      </div>

      {/* NAVIGASI UTAMA */}
      <div className="flex-1 space-y-1 px-2">
        {routes.map((route) => {
          const isActive = pathname === route.href
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group flex items-center rounded-xl px-4 py-3.5 text-sm font-medium transition-all relative overflow-hidden",
                isActive
                  ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {/* Indikator Aktif (Garis Tipis di Kiri) */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-r-full bg-emerald-500" />
              )}
              
              <route.icon 
                className={cn(
                  "h-[1.15rem] w-[1.15rem] mr-4 transition-colors",
                  isActive ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground group-hover:text-foreground"
                )} 
                strokeWidth={1.5}
              />
              <span className="tracking-tight">{route.label}</span>
            </Link>
          )
        })}
      </div>
      
      {/* FOOTER / USER PROFILE MINIMALIS */}
      <div className="px-2 mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer group">
            <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center border group-hover:border-muted-foreground/30 transition-colors">
                <User className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-semibold truncate text-foreground/90">Guest User</span>
                <span className="text-[11px] text-muted-foreground truncate font-medium">View Profile</span>
            </div>
        </div>
      </div>
    </div>
  )
}