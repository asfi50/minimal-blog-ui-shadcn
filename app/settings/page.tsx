"use client";

import { useState } from "react";
import { SettingsTabs } from "@/components/settings/layout/SettingsTabs";
import { AccountSettings } from "@/components/settings/account/AccountSettings";
import { NotificationSettings } from "@/components/settings/notifications/NotificationSettings";
import { SecuritySettings } from "@/components/settings/security/SecuritySettings";
import { PersonalInfo, NotificationSettings as NotificationSettingsType } from "@/components/settings/types";


function SettingsPage() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "MT ASFI",
    email: "asfi@example.com",
    phone: "+1234567890",
  });

  const [notificationSettings, setNotificationSettings] = useState<NotificationSettingsType>({
    email: true,
    sms: false,
    telegram: true,
    emailId: "asfi@example.com",
    phoneNumber: "+1234567890",
    telegramId: "@mtasfi",
    notificationTime: "09:00",
    frequency: "daily",
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-500">Manage your account and preferences</p>
      </div>
      <SettingsTabs
        accountContent={
          <AccountSettings
            personalInfo={personalInfo}
            onUpdatePersonalInfo={setPersonalInfo}
          />
        }
        notificationsContent={
          <NotificationSettings
            settings={notificationSettings}
            onUpdate={setNotificationSettings}
          />
        }
        securityContent={
            <SecuritySettings />
        }
      />
    </div>
  );
}

export default SettingsPage;