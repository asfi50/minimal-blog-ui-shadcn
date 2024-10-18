"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const pricingData = [
    {
        id: 1,
        name: "Basic",
        price: "0",
        yearlyPrice: "0",
        features: [
            "Access to basic channels",
            "Email notifications",
            "Standard support",
            "Basic features",
            "Limited storage"
        ],
        isPremium: false,
    },
    {
        id: 2,
        name: "Premium",
        price: "99",
        yearlyPrice: "950",
        features: [
            "Access to premium channels",
            "SMS notifications",
            "Priority support",
            "Exclusive content",
            "Unlimited storage"
        ],
        isPremium: true,
    },
];

export default function PricingPage() {
    const [billingMode, setBillingMode] = useState<"monthly" | "yearly">("monthly");

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">Pricing</h1>
                <div className="text-lg text-gray-500 mb-6">Choose the plan that suits you best</div>
                
                <div className="flex items-center justify-center gap-4">
                    <Label htmlFor="billing-toggle" className={`text-sm ${billingMode === "monthly" ? "font-bold" : ""}`}>
                        Monthly
                    </Label>
                    <Switch
                        id="billing-toggle"
                        checked={billingMode === "yearly"}
                        onCheckedChange={(checked) => setBillingMode(checked ? "yearly" : "monthly")}
                        className="data-[state=checked]:bg-primary"
                    />
                    <div className="flex items-center gap-2">
                        <Label htmlFor="billing-toggle" className={`text-sm ${billingMode === "yearly" ? "font-bold" : ""}`}>
                            Yearly
                        </Label>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                            Save 20%
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {pricingData.map((plan) => (
                    <Card 
                        key={plan.id} 
                        className={`flex flex-col hover:shadow-lg transition-shadow duration-300
                            ${plan.isPremium ? 'border-primary shadow-md' : ''}`}
                    >
                        <CardHeader className="text-center flex-grow-0">
                            <CardTitle className="text-2xl font-semibold mb-2">{plan.name}</CardTitle>
                            <div className="flex items-center justify-center gap-1">
                                <span className="text-4xl font-bold">
                                    {billingMode === "monthly" ? plan.price : plan.yearlyPrice}
                                </span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-lg">tk</span>
                                    <span className="text-sm text-gray-500">
                                        /{billingMode === "monthly" ? "mo" : "yr"}
                                    </span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-4">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        {plan.isPremium ? (
                                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        ) : (
                                            <XCircle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                        )}
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="flex-grow-0 pt-6">
                            <Button 
                                variant={plan.isPremium ? "default" : "outline"} 
                                className="w-full"
                            >
                                {plan.isPremium ? "Subscribe Now" : "Get Started"}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}