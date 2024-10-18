import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Smartphone, Send } from "lucide-react";
import { NotificationSettings } from "../types";

interface NotificationMethodsProps {
    settings: NotificationSettings;
    onUpdate: (settings: NotificationSettings) => void;
}

export function NotificationMethods({ settings, onUpdate }: NotificationMethodsProps) {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Notification Methods</h3>
            <div className="space-y-4">
                {/* Email Notifications */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                    </div>
                    <Switch
                        id="email-notifications"
                        checked={settings.email}
                        onCheckedChange={(checked) =>
                            onUpdate({ ...settings, email: checked })
                        }
                    />
                </div>

                {settings.email && (
                    <div className="ml-6 space-y-2">
                        <Label htmlFor="email-id">Email Address</Label>
                        <Input
                            id="email-id"
                            value={settings.emailId}
                            onChange={(e) =>
                                onUpdate({
                                    ...settings,
                                    emailId: e.target.value,
                                })
                            }
                        />
                    </div>
                )}

                <Separator />

                {/* SMS Notifications */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Smartphone className="h-4 w-4" />
                        <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    </div>
                    <Switch
                        id="sms-notifications"
                        checked={settings.sms}
                        onCheckedChange={(checked) =>
                            onUpdate({ ...settings, sms: checked })
                        }
                    />
                </div>

                {settings.sms && (
                    <div className="ml-6 space-y-2">
                        <Label htmlFor="phone-number">Phone Number</Label>
                        <Input
                            id="phone-number"
                            value={settings.phoneNumber}
                            onChange={(e) =>
                                onUpdate({
                                    ...settings,
                                    phoneNumber: e.target.value,
                                })
                            }
                        />
                    </div>
                )}

                <Separator />

                {/* Telegram Notifications */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Send className="h-4 w-4" />
                        <Label htmlFor="telegram-notifications">Telegram Notifications</Label>
                    </div>
                    <Switch
                        id="telegram-notifications"
                        checked={settings.telegram}
                        onCheckedChange={(checked) =>
                            onUpdate({ ...settings, telegram: checked })
                        }
                    />
                </div>

                {settings.telegram && (
                    <div className="ml-6 space-y-2">
                        <Label htmlFor="telegram-id">Telegram ID</Label>
                        <Input
                            id="telegram-id"
                            value={settings.telegramId}
                            onChange={(e) =>
                                onUpdate({
                                    ...settings,
                                    telegramId: e.target.value,
                                })
                            }
                        />
                    </div>
                )}
            </div>
        </div>
    );
}