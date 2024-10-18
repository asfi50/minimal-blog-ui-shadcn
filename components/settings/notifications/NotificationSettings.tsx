import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { NotificationMethods } from "./NotificationMethods";
import { NotificationSchedule } from "./NotificationSchedule";
import { NotificationSettings as NotificationSettingsType } from "../types";

interface NotificationSettingsProps {
    settings: NotificationSettingsType;
    onUpdate: (settings: NotificationSettingsType) => void;
}

export function NotificationSettings({ settings, onUpdate }: NotificationSettingsProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                    Manage how you receive notifications
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <NotificationMethods settings={settings} onUpdate={onUpdate} />
                <Separator />
                <NotificationSchedule settings={settings} onUpdate={onUpdate} />
                <Button className="mt-4">Save Notification Settings</Button>
            </CardContent>
        </Card>
    );
}