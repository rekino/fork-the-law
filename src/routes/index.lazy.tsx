import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Trans, useTranslation } from "react-i18next"

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-24 bg-white shadow-md">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <Trans>Reimagine the Constitution</Trans>
          </h1>
          <p className="text-lg text-slate-600">
            <Trans>What would a better future look like — if you could write it?</Trans><br />
            <Trans>Fork, edit, and share your vision for a better Iran.</Trans>
          </p>
          <div className="flex space-x-4">
            <Button className="px-6 py-3 text-lg">✍️ <Trans>Start Editing</Trans></Button>
            <Button variant="outline" className="px-6 py-3 text-lg">
              🔍 <Trans>Explore Versions</Trans>
            </Button>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img
            src="/hero.svg"
            alt="Edit Constitution"
            className="w-full max-w-md rounded-md"
          />
        </div>
      </section>

      {/* How it Works */}
      <section className="px-6 md:px-24 py-16 bg-slate-100">
        <h2 className="text-2xl font-semibold mb-10"><Trans>How it Works</Trans></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "1. Fork the Constitution",
              desc: "Start from the current version as your base.",
            },
            {
              title: "2. Edit it Freely",
              desc: "Change, add or remove articles as you see fit.",
            },
            {
              title: "3. Share Your Vision",
              desc: "Publish and let others explore your draft.",
            },
          ].map((step, idx) => (
            <Card key={idx} className="p-4">
              <CardContent>
                <h3 className="font-semibold text-lg mb-2"><Trans>{step.title}</Trans></h3>
                <p className="text-slate-600"><Trans>{step.desc}</Trans></p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Drafts */}
      <section className="px-6 md:px-24 py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold"><Trans>Explore Community Versions</Trans></h2>
          <Input
            type="text"
            placeholder={t("Search drafts...")}
            className="max-w-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <Card key={id} className="hover:bg-slate-50">
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">
                  <Trans>Constitution for a Free Iran</Trans>
                </h3>
                <p className="text-sm text-slate-600"><Trans>by user</Trans> {id}</p>
                <Button variant="link" className="px-0">
                  <Trans>View Changes</Trans>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-24 py-8 text-center text-slate-500 text-sm">
        <p><Trans>This project is a civic playground for collective imagination. Not affiliated with any government.</Trans></p>
        <p> <Trans>Illustrations by</Trans> <a href="https://freeicons.io/social-media-icons-set-2/groupfacebook-people-community-social-network-icon-366487">Chattapat</a>,
          <a href="https://freeicons.io/law-and-legislation-icon-set-39326/book-constitution-court-jurisprudence-law-police-icon-1606900">Pexelpy</a>,
          <a href="https://freeicons.io/user-interface-23/lamp-bulb-idea-light-user-interface-icon-123752">ColourCreatype</a>,
          <a href="https://freeicons.io/free-icons-pack/add-icon-14899">Fasil</a>,
          <a href="https://freeicons.io/e-commerce-7/cancel-badge-delete-remove-icon-112296">ColourCreatype</a>,
          <a href="https://freeicons.io/user-interface-icons-2/code-fork-symbol-icon-36432">Muhammad Haq</a> <Trans>on</Trans> <a href="https://freeicons.io">freeicons.io</a>
        </p>
      </footer>
    </div>
  );
}