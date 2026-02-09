"use client"

import { useMediaQuery } from "@/src/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Plus } from "lucide-react"
import { useState } from "react"

export function CreateTransactionDialog() {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const TriggerButton = (
    <Button
      size="icon"
      className="h-14 w-14 rounded-full bg-gradient-to-t from-emerald-600 to-emerald-500 shadow-xl shadow-emerald-500/30 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 border-4 border-white dark:border-gray-950"
    >
      <Plus className="h-8 w-8 text-white" strokeWidth={2.5} />
    </Button>
  )

  const Content = (
    <div className="space-y-4 py-4">
      <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg text-center text-gray-500">
        Form Transaksi akan muncul di sini (Next Task)
      </div>
      {/* Placeholder tombol aksi */}
      <div className="flex justify-end gap-2">
         <Button variant="outline" onClick={() => setOpen(false)}>Batal</Button>
         <Button className="bg-emerald-600 hover:bg-emerald-700">Simpan</Button>
      </div>
    </div>
  )

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{TriggerButton}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tambah Transaksi</DialogTitle>
            <DialogDescription>
              Catat pemasukan atau pengeluaran baru.
            </DialogDescription>
          </DialogHeader>
          {Content}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{TriggerButton}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Tambah Transaksi</DrawerTitle>
          <DrawerDescription>
            Catat pemasukan atau pengeluaran baru.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
            {Content}
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Batal</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}