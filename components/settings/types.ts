export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
}

export interface NotificationSettings {
    email: boolean;
    sms: boolean;
    telegram: boolean;
    emailId: string;
    phoneNumber: string;
    telegramId: string;
    notificationTime: string;
    frequency: string;
}

export interface SettingsTabProps {
    children: React.ReactNode;
    title: string;
    description: string;
}