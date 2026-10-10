import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto my-auto flex max-w-xl flex-col gap-6 p-6">
      <h1 className="text-3xl font-semibold">Better Auth 登录实验</h1>
      <p className="text-muted-foreground">注册账号并登录，然后访问 Dashboard 和账号设置。</p>
      <div className="flex flex-wrap gap-4">
        <Link href="/auth/sign-in" className="underline">登录</Link>
        <Link href="/auth/sign-up" className="underline">注册</Link>
        <Link href="/dashboard" className="underline">Dashboard</Link>
        <Link href="/settings/account" className="underline">账号设置</Link>
      </div>
    </main>
  );
}
