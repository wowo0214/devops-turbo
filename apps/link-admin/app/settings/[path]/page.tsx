import { viewPaths } from "@better-auth-ui/core"
import { ensureSessionServer } from "@better-auth-ui/core/server"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { headers } from "next/headers"
import { notFound, redirect } from "next/navigation"
import { Suspense } from "react"

import { Settings } from "@repo/ui/auth"
import { auth } from "@/lib/auth"
import { getQueryClient } from "@/lib/query-client"

const validSettingsPaths = new Set(Object.values(viewPaths.settings))

export default function SettingsPage({ params }: { params: Promise<{ path: string }> }) {
  return (
    <Suspense fallback={<main className="mx-auto w-full max-w-3xl p-4 md:p-6" aria-busy="true" />}>
      <SettingsPageContent params={params} />
    </Suspense>
  )
}

async function SettingsPageContent({ params }: { params: Promise<{ path: string }> }) {
  const { path } = await params
  if (!validSettingsPaths.has(path)) notFound()

  const queryClient = getQueryClient()
  const session = await ensureSessionServer(queryClient, auth, { headers: await headers() })
  if (!session) redirect(`/auth/sign-in?redirectTo=${encodeURIComponent(`/settings/${path}`)}`)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="mx-auto w-full max-w-3xl p-4 md:p-6">
        <Settings path={path} />
      </main>
    </HydrationBoundary>
  )
}
