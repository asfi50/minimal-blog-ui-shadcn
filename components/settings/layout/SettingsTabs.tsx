import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { User, Bell, Shield } from "lucide-react";

interface SettingsTabsProps {
    accountContent: React.ReactNode;
    notificationsContent: React.ReactNode;
    securityContent: React.ReactNode;
}

export function SettingsTabs({ accountContent, notificationsContent, securityContent }: SettingsTabsProps) {
    return (
        <Tabs defaultValue="account" className="space-y-8">
            <TabsList className="flex md:grid md:w-full md:grid-cols-3 lg:w-[400px]">
                <TabsTrigger value="account" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Account
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    Notifications
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Security
                </TabsTrigger>
            </TabsList>

            <TabsContent value="account">{accountContent}</TabsContent>
            <TabsContent value="notifications">{notificationsContent}</TabsContent>
            <TabsContent value="security">{securityContent}</TabsContent>
        </Tabs>
    );
}