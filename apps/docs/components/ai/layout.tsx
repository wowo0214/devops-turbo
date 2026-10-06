'use client';
import { DocsLayout as Layout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import { DocsSocialFooter } from '../docs-social-footer';
import { AIChat, AIChatPanel, AIChatTrigger, useAIChat } from './search';

export function DocsLayout(props: DocsLayoutProps) {
  return (
    <AIChat>
      <ChatLayout {...props} />
      <AIChatTrigger className="docs-ai-trigger" />
    </AIChat>
  );
}

function ChatLayout(props: DocsLayoutProps) {
  const { open } = useAIChat();

  return (
    <>
      <Layout
        {...props}
        githubUrl={undefined}
        themeSwitch={{ enabled: false }}
        sidebar={{ ...props.sidebar, footer: <DocsSocialFooter /> }}
      />
      {open && (
        <section className="docs-ai-panel" role="dialog" aria-label="Ask AI">
          <AIChatPanel />
        </section>
      )}
    </>
  );
}
