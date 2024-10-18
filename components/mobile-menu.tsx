"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

type MobileMenuProps = {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
};

const defaultLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/pricing", text: "Pricing" },
  { href: "/channels", text: "Channels" },
  { href: "/tags", text: "Tags" },
];

const loggedInLinks = [
  { href: "/profile", text: "Profile" },
  { href: "/settings", text: "Settings" },
  { href: "/report", text: "Report" },
];

const nonLoggedInLinks = [
  { href: "/login", text: "Log in" },
  { href: "/register", text: "Sign up" },
];

const MobileMenu = ({ loggedIn, setLoggedIn }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[96%]">
          <div className="px-4 py-6">
            <div className="flex justify-end mb-4">
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-6 w-6" />
                </Button>
              </DrawerClose>
            </div>
            <div className="space-y-4">
              <div className="relative mb-4">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      window.location.href =
                        "/search?q=" + e.currentTarget.value;
                    }
                  }}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              {defaultLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              {loggedIn ? (
                <>
                  {loggedInLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setOpen(false)}
                    >
                      {link.text}
                    </Link>
                  ))}
                  <Button
                    variant="ghost"
                    className="text-foreground hover:bg-accent hover:text-accent-foreground w-full text-left px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => {
                      setLoggedIn(false);
                      setOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  {nonLoggedInLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setOpen(false)}
                    >
                      {link.text}
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
