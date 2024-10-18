import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { NotificationSettings } from "../types";

interface NotificationScheduleProps {
    settings: NotificationSettings;
    onUpdate: (settings: NotificationSettings) => void;
}

export function NotificationSchedule({ settings, onUpdate }: NotificationScheduleProps) {
    const timeOptions = Array.from({ length: 24 }, (_, i) => {
        const hour = i.toString().padStart(2, '0');
        return `${hour}:00`;
    });

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Notification Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="notification-time">Preferred Time</Label>
                    <Select
                        value={settings.notificationTime}
                        onValueChange={(value) =>
                            onUpdate({
                                ...settings,
                                notificationTime: value,
                            })
                        }
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                            {timeOptions.map((time) => (
                                <SelectItem key={time} value={time}>
                                    {time}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="frequency">Frequency</Label>
                    <Select
                        value={settings.frequency}
                        onValueChange={(value) =>
                            onUpdate({
                                ...settings,
                                frequency: value,
                            })
                        }
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="realtime">Real-time</SelectItem>
                            <SelectItem value="daily">Daily Digest</SelectItem>
                            <SelectItem value="weekly">Weekly Summary</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}