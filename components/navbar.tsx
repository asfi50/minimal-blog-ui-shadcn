"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Search, User, Menu } from "lucide-react";
import { Pacifico } from "next/font/google";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className={`text-3xl font-bold ${pacifico.className}`}>
                Janun!
              </span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link
                  href="/about"
                  className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <Button variant="ghost" size="icon" className="ml-2">
                <Bell className="h-5 w-5" />
              </Button>
              <ModeToggle />
              {loggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="ml-2">
                      <Avatar>
                        <AvatarImage
                          src="https://random.imagecdn.app/500/500?user"
                          alt="User"
                        />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div
                        onClick={() => setLoggedIn(false)}
                        className="cursor-pointer"
                      >
                        Logout
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" className="ml-2">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button variant="default" className="ml-2">
                      Sign up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/about"
              className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              Pricing
            </Link>
            {loggedIn ? (
              <>
                <Link
                  href="/profile"
                  className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
                >
                  Settings
                </Link>
                <Button
                  variant="ghost"
                  className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setLoggedIn(false)}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="text-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
