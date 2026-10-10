"use client"

import Link from "next/link"
import { UserButton } from "@repo/ui/auth/user/user-button"

export function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b px-4 py-3 md:px-6">
      <Link href="/" className="font-semibold">Better Auth 实验</Link>
      <nav className="flex items-center gap-4">
        <Link href="/dashboard" className="text-sm">Dashboard</Link>
        <UserButton />
      </nav>
    </header>
  )
}
