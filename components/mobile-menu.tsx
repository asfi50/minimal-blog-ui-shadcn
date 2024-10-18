"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export const mobileMenu = (loggedIn:boolean, setLoggedIn:any) => {
  return (
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
  )
}
