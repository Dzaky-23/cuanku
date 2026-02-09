"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, PieChart, List, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export const BottomNav = () => {
  const pathname = usePathname()

  const routes = [
    { label: "Home", icon: Home, href: "/" },
    { label: "Trans", icon: List, href: "/transactions" },
    { label: "Categ", icon: PieChart, href: "/categories" },
    { label: "Settings", icon: Settings, href: "/settings" },
  ]

  return (
    // Container dibuat floating dengan margin
    <div className="fixed bottom-4 inset-x-4 z-50 lg:hidden">
      <div className="flex items-center justify-around h-16 bg-background/80 backdrop-blur-xl border rounded-2xl shadow-lg shadow-black/5 px-2">
        {routes.map((route) => {
           const isActive = pathname === route.href;
           return (
            <Link
                key={route.href}
                href={route.href}
                className={cn(
                "flex flex-1 flex-col items-center justify-center py-2 transition-all relative group",
                isActive 
                    ? "text-emerald-600 dark:text-emerald-400" 
                    : "text-muted-foreground hover:text-foreground"
                )}
            >
                {/* Active Indicator Dot */}
                <span className={cn(
                    "absolute top-1 w-1 h-1 rounded-full bg-emerald-500 transition-all duration-300",
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                )}/>
                
                <route.icon 
                    className={cn(
                        "w-6 h-6 mb-0.5 transition-transform", 
                        isActive ? "scale-105" : "scale-100 group-hover:scale-105"
                    )} 
                    strokeWidth={1.5} // Icon lebih tipis
                />
                <span className={cn(
                    "text-[9px] font-semibold uppercase tracking-widest transition-opacity",
                    isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                )}>
                    {route.label}
                </span>
            </Link>
           )
        })}
      </div>
    </div>
  )
}