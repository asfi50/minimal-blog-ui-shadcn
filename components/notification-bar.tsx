"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  Check,
  Clock,
  Mail,
  MessageSquare,
  Star,
  Trash2,
  User,
  X,
} from "lucide-react";

type Notification = {
  id: string;
  type: "subscription" | "system";
  title: string;
  description: string;
  time: string;
  read: boolean;
  logo?: string;
};

type NotificationBarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const NotificationBar = ({ open, onOpenChange }: NotificationBarProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "subscription",
      title: "New Post on @jnu/notice",
      description: "Jagannath University Admission Test 2024",
      time: "5m ago",
      read: false,
      logo: "https://random.imagecdn.app/500/500?n1",
    },
    {
      id: "2",
      type: "subscription",
      title: "New Post on @jnu/notice",
      description: "Jagannath University Admission Test 2024",
      time: "5m ago",
      read: false,
      logo: "https://random.imagecdn.app/500/500?n2",
    },
    {
      id: "3",
      type: "subscription",
      title: "New Post on @jnu/notice",
      description: "Jagannath University Admission Test 2024",
      time: "5m ago",
      read: true,
      logo: "https://random.imagecdn.app/500/500?n3",
    },
    {
      id: "1",
      type: "system",
      title: "Someone Reported Your Comment",
      description:
        "Your comment on the post 'Jagannath University Admission Test 2024' has been reported by a user.",
      time: "5m ago",
      read: true,
      logo: "https://random.imagecdn.app/500/500?n4",
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "subscription":
        return <MessageSquare className="h-4 w-4 text-blue-500" />;
      case "system":
        return <Mail className="h-4 w-4 text-red-500" />;
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="space-y-4">
          <SheetTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
              {unreadCount > 0 && (
                <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5">
                  {unreadCount}
                </span>
              )}
            </span>
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={markAllAsRead}
              >
                Mark all as read
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>

        <Tabs defaultValue="all" className="mt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[calc(100vh-12rem)] mt-4 pr-4">
            <TabsContent value="all" className="space-y-4">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-4 p-4 rounded-lg transition-colors ${
                      !notification.read ? "bg-muted/50" : "hover:bg-muted/30"
                    }`}
                  >
                    <Avatar>
                      <AvatarImage src={notification.logo} />
                      <AvatarFallback>
                        {notification.logo?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            {getNotificationIcon(notification.type)}
                            <span className="font-medium">
                              {notification.title}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {notification.time}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => markAsRead(notification.id)}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No notifications to show
                </div>
              )}
            </TabsContent>

            <TabsContent value="unread" className="space-y-4">
              {notifications.filter((n) => !n.read).length > 0 ? (
                notifications
                  .filter((n) => !n.read)
                  .map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 p-4 rounded-lg transition-colors ${
                        !notification.read ? "bg-muted/50" : "hover:bg-muted/30"
                      }`}
                    >
                      <Avatar>
                        <AvatarImage src={notification.logo} />
                        <AvatarFallback>
                          {notification.logo?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              {getNotificationIcon(notification.type)}
                              <span className="font-medium">
                                {notification.title}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {notification.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {notification.time}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No unread notifications
                </div>
              )}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationBar;
