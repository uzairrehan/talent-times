"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Navbar from "@/components/navbar";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileInput = ({ id, label, accept, onChange }: any) => (
    <div className="space-y-2">
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} type="file" accept={accept} onChange={onChange} className="cursor-pointer" />
    </div>
)

export default function Info() {
    const [logo, setLogo] = useState(null)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleLogoChange = (e: any) => {
        const file = e.target.files[0]
        if (file) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setLogo(URL.createObjectURL(file) as any)
        }
    }

    return (
        <>
            <Navbar />
            <Card className="w-full max-w-4xl mx-auto border-none">
                <CardHeader className="flex justify-center items-center">
                    
                    {/* <CardTitle className="text-2xl">Company Profile</CardTitle> */}
                    <CardTitle className="border border-"> 
                        <Image src={"/talent.png"} alt={"logo"} width={200} height={200}
                    />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-8">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="company-name">Company Name</Label>
                                <Input id="company-name" placeholder="Enter your company name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter your email" disabled />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea id="bio" placeholder="Tell us about your company" className="min-h-[100px]" />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="website">Website URL</Label>
                                <Input id="website" type="url" placeholder="https://example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="linkedin">LinkedIn URL</Label>
                                <Input id="linkedin" type="url" placeholder="https://linkedin.com/company/..." />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="location">Location</Label>
                                <Input id="location" placeholder="City, Country" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>

                        <Separator />

                        <div className="grid gap-4 sm:grid-cols-2">
                            <FileInput
                                id="logo"
                                label="Company Logo"
                                accept="image/*"
                                onChange={handleLogoChange}
                            />
                            <div className="space-y-2">
                                <Label htmlFor="industry">Industry</Label>
                                <Select>
                                    <SelectTrigger id="industry">
                                        <SelectValue placeholder="Select an industry" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="tech">Technology</SelectItem>
                                        <SelectItem value="finance">Finance</SelectItem>
                                        <SelectItem value="healthcare">Healthcare</SelectItem>
                                        <SelectItem value="education">Education</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {logo && (
                            <div className="mt-4">
                                <img src={logo} alt="Company Logo Preview" className="max-w-[200px] max-h-[200px] object-contain" />
                            </div>
                        )}
                    </form>
                </CardContent>
                <CardFooter>
                    <Button className="ml-auto">Save Changes</Button>
                </CardFooter>
            </Card>
        </>
    )
}