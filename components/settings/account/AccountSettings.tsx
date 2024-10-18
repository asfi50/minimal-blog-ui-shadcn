import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { PersonalInfo } from "../types";

interface AccountSettingsProps {
    personalInfo: PersonalInfo;
    onUpdatePersonalInfo: (info: PersonalInfo) => void;
}

export function AccountSettings({ personalInfo, onUpdatePersonalInfo }: AccountSettingsProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                    Update your personal information
                </CardDescription>
            </CardHeader>
            <CardContent>
                <PersonalInfoForm 
                    personalInfo={personalInfo} 
                    onUpdate={onUpdatePersonalInfo} 
                />
            </CardContent>
        </Card>
    );
}