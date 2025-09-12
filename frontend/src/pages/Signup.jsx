import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { Navigate, useNavigate } from "react-router-dom";

export default function Signup() {
    const [gmail, setgmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Enter Email: ${gmail}\nPassword: ${password}`);
    };

    return (
        <div>
            <div className="h-screen flex items-center justify-center"
                style={{ background: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)" }}>
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl">Signup</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <Input
                                placeholder="Enter your email..."
                                value={gmail}
                                onChange={(e) => setgmail(e.target.value)}
                            />
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button type="submit" className="w-full">
                                Signup
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <span className="text-blue-500 cursor-pointer" onClick={()=>{
                                navigate("/login")
                            }}>Login</span>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
