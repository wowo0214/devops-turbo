import { viewPaths } from "@better-auth-ui/core"
import { notFound } from "next/navigation"
import { Auth } from "@repo/ui/auth/auth"

const validAuthPaths = new Set(Object.values(viewPaths.auth))

export default async function AuthPage({ params }: { params: Promise<{ path: string }> }) {
  const { path } = await params
  if (!validAuthPaths.has(path)) notFound()

  return (
    <main className="my-auto flex justify-center p-4 md:p-6">
      <Auth path={path} />
    </main>
  )
}
