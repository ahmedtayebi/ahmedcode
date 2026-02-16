"use client";

import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Force dark theme always
        document.documentElement.setAttribute("data-theme", "dark");
    }, []);

    return <>{children}</>;
}
