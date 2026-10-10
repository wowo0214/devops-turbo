"use client"

import { useAuthPlugin } from "@better-auth-ui/react"
import { ShieldCheck } from "lucide-react"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@repo/ui/components/empty"
import { oauthProviderPlugin } from "@repo/ui/auth/lib/oauth-provider-plugin"

export function AuthorizedApplicationsEmpty() {
  const { localization } = useAuthPlugin(oauthProviderPlugin)

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ShieldCheck />
        </EmptyMedia>
        <EmptyTitle>{localization.noConnectedApplications}</EmptyTitle>
        <EmptyDescription>
          {localization.connectedApplicationsDescription}
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
