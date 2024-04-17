'use client'
import "@/public/assets/css/switch.css"
import { useThemeStore } from "@/src/app/store/theme"


export function Switch() {
    let currentTheme = useThemeStore((state) => state.theme)
    const setDarkMode = useThemeStore((state) => state.setDarkTheme)
    const setLightMode = useThemeStore((state) => state.setLightTheme)

    const handleCheckDarkMode = () => {
        currentTheme === 'dark'
            ?setLightMode()
            :setDarkMode()
    }
    return (
        <div className="flex items-center absolute -top-10 right-0 ">
            <div className="toggle-switch relative inline-flex w-[52px] h-8 mr-2 cursor-pointer">
            <input
                onChange={handleCheckDarkMode}
                id="dark-light-mode"
                className="toggle-checkbox hidden"
                type="checkbox"
                checked={currentTheme === 'dark' ? true : false}
            />
            <label
                htmlFor="dark-light-mode"
                className="toggle-icon relative block w-12 h-8 rounded-full transition-color duration-150 ease-out"
            />
            </div>
        </div>
    )
}