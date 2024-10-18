import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PersonalInfo } from "../types";

interface PersonalInfoFormProps {
    personalInfo: PersonalInfo;
    onUpdate: (info: PersonalInfo) => void;
}

export function PersonalInfoForm({ personalInfo, onUpdate }: PersonalInfoFormProps) {
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                    id="name"
                    value={personalInfo.name}
                    onChange={(e) =>
                        onUpdate({ ...personalInfo, name: e.target.value })
                    }
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) =>
                        onUpdate({ ...personalInfo, email: e.target.value })
                    }
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                    id="phone"
                    value={personalInfo.phone}
                    onChange={(e) =>
                        onUpdate({ ...personalInfo, phone: e.target.value })
                    }
                />
            </div>
            <Button className="mt-4">Save Changes</Button>
        </div>
    );
}