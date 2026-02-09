import { Sidebar } from "@/components/layout/sidebar"
import { BottomNav } from "@/components/layout/bottom-nav"
import { CreateTransactionDialog } from "@/app/transactions/create-transactions-dialog" // Import ini

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full relative bg-muted/20">
      {/* Sidebar untuk Desktop */}
      <div className="hidden h-full md:flex md:w-80 md:flex-col md:fixed md:inset-y-0 z-50 bg-background border-r">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="md:pl-80 pb-24 md:pb-8 h-full overflow-y-auto">
        <div className="max-w-5xl mx-auto p-6 md:p-8">
            {children}
        </div>
      </main>
      
      {/* FLOATING ACTION BUTTON CONTAINER */}
      <div className="fixed right-4 bottom-24 md:bottom-8 md:right-8 z-50">
        <CreateTransactionDialog />
      </div>

      {/* Bottom Nav untuk Mobile */}
      <BottomNav />
    </div>
  )
}