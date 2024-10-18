import Link from "next/link";
import {
  Home,
  Hash,
  Users,
  BookOpen,
  HelpCircle,
  Flag,
  Settings,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PopularChannels } from "@/components/popular-channels";

const Sidebar = () => {
  return (
    <>
      <div className="bg-background w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <nav>
          <Link
            href="/"
            className="flex items-center space-x-2 px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg"
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            href="/channels"
            className="flex items-center space-x-2 px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg"
          >
            <Hash className="h-5 w-5" />
            <span>Channels</span>
          </Link>
          <Link
            href="/tags"
            className="flex items-center space-x-2 px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg"
          >
            <BookOpen className="h-5 w-5" />
            <span>Tags</span>
          </Link>
          <Link
            href="/report"
            className="flex items-center space-x-2 px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg"
          >
            <Flag className="h-5 w-5" />
            <span>Report</span>
          </Link>
          <Link
            href="/settings"
            className="flex items-center space-x-2 px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
          <Link
            href="/help"
            className="flex items-center space-x-2 px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg"
          >
            <HelpCircle className="h-5 w-5" />
            <span>Help</span>
          </Link>
        </nav>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">My Channels</CardTitle>
        </CardHeader>
        <CardContent>
          <PopularChannels />
        </CardContent>
      </Card>
      </div>
    </>
  );
};

export default Sidebar;
