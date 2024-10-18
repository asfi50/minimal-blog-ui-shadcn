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
import MobileMenu from "@/components/mobile-menu";
import NotificationBar from "@/components/notification-bar";
import { useState } from "react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [notificationOpen, setNotificationOpen] = useState(false);

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
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={() => setNotificationOpen(!notificationOpen)}
              >
                <Bell className="h-5 w-5" />
              </Button>
              <ModeToggle />
              <NotificationBar open={notificationOpen} onOpenChange={setNotificationOpen} />
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
          <MobileMenu loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
