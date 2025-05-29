"use client";
import { useTheme } from "next-themes";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
const ModeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	/**
	 * useState and effect is used to fix hydration issue , as the theme provider uses the window object which is not present on the server , so we will mae sure the code executes only when its mounted on browser.
	 */
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="focus-visible:ring-0 "
				>
					{theme === "system" ? (
						<SunMoon />
					) : theme === "dark" ? (
						<Moon />
					) : (
						<Sun />
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<DropdownMenuCheckboxItem
						checked={theme === "light"}
						onClick={() => setTheme("light")}
					>
						Light
					</DropdownMenuCheckboxItem>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<DropdownMenuCheckboxItem
						checked={theme === "dark"}
						onClick={() => setTheme("dark")}
					>
						Dark
					</DropdownMenuCheckboxItem>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<DropdownMenuCheckboxItem
						checked={theme === "system"}
						onClick={() => setTheme("system")}
					>
						System
					</DropdownMenuCheckboxItem>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ModeToggle;
