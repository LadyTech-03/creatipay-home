import Image from "next/image";
import { ArrowRightIcon, MenuIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { headerMenuGroups } from "@/content/navigation";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white">
      <div className="shell-container flex justify-between h-20 items-center gap-4 lg:gap-8">
        <Link href={'/'} className="flex items-center gap-2" aria-label="Payuno home">
          <Image
            src="/logos/logo.svg"
            alt="Payuno"
            width={32}
            height={32}
            priority
          />
          <Image
            src="/logos/logo_1.svg"
            alt="Payuno"
            width={120}
            height={120}
            priority
          />
        </Link>

        <div className="hidden h-full items-center justify-center lg:flex">
          <NavigationMenu align="center" className="max-w-none">
            <NavigationMenuList className="gap-1">
              {headerMenuGroups.map((group) => (
                <NavigationMenuItem key={group.label}>
                  <NavigationMenuTrigger className="h-10 rounded-lg bg-transparent px-3 text-xl font-semibold text-brand-900 hover:bg-brand-50 data-open:bg-brand-50 data-open:hover:bg-brand-100">
                    {group.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-56">
                    <ul className="grid">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <NavigationMenuLink
                            href={link.href}
                            className="hover:bg-transparent px-2 py-2 text-lg font-semibold text-brand-900 hover:text-brand-600"
                          >
                            {link.label}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden items-center justify-end gap-4 lg:flex">
          <Link
            href={"https://creatipay.vercel.app"}
            target="_blank"
            className="text-base font-semibold text-brand-900 transition-colors hover:text-brand-600"
          >
            Login
          </Link>
          <Link href={"https://creatipay.vercel.app/sign-up"} target="_blank">
            <Button className="h-12 rounded-2xl bg-brand-800 px-6 text-base text-primary-foreground cursor-pointer hover:bg-brand-700">
              Sign Up
              <ArrowRightIcon className="size-4" />
            </Button>
          </Link>
        </div>

        <div className="flex justify-end lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="size-10 rounded-xl border-brand-200 text-brand-700"
                />
              }
            >
              <MenuIcon className="size-5" aria-hidden="true" />
              <span className="sr-only">Open navigation menu</span>
            </SheetTrigger>

            <SheetContent side="right" className="w-[min(88vw,24rem)] p-0">
              <SheetHeader className="border-b border-border/70 bg-muted/40">
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Browse sections and account entry points.
                </SheetDescription>
              </SheetHeader>

              <div className="max-h-[70vh] space-y-3 overflow-y-auto p-4">
                {headerMenuGroups.map((group) => (
                  <details
                    key={group.label}
                    className="rounded-xl border border-border/70 bg-card px-3 py-2"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                      <span>{group.label}</span>
                    </summary>
                    <ul className="mt-2 space-y-1 border-t border-border/60 pt-2">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="block rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>

              <div className="mt-auto grid gap-2 border-t border-border/70 p-4">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button className="w-full bg-[#4a46cc] text-white hover:bg-[#3f3bb8]">
                  Sign Up
                  <ArrowRightIcon className="size-4" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
