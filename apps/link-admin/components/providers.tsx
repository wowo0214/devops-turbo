"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ThemeProvider, useTheme } from "next-themes"
import type { ReactNode } from "react"

import { AuthProvider } from "@repo/ui/auth/auth-provider"
import { Toaster } from "@repo/ui/components/sonner"
import { themePlugin } from "@repo/ui/auth/lib/theme-plugin"
import { authClient } from "@/lib/auth-client"
import { getQueryClient } from "@/lib/query-client"

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <QueryClientProvider client={getQueryClient()}>
        <AuthProvider
          authClient={authClient}
          redirectTo="/dashboard"
          socialProviders={["google", "github"]}
          emailAndPassword={{ requireEmailVerification: false }}
          navigate={({ to, replace }) => replace ? router.replace(to) : router.push(to)}
          plugins={[themePlugin({ useTheme })]}
          Link={Link}
        >
          {children}
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
