import i18next from "i18next";
import { useEffect, useState } from "react";
import ThemeSwitch from "../Switch/Switch";


const Navbar = () => {

  const [ theme, setTheme ] = useState("light");

  const element = document.documentElement


  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme])


  const handleChange = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

    return (
        <div className="flex dark:bg-darkGray h-11 xl:self-center">
          <div className="flex ml-2  gap-1">
            <button  onClick={() => i18next.changeLanguage("es")}><img className="w-7 h-[1.875rem] lg:w-8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVR4nO2YuRHAQAgDlbkZ+s8pRLXI6Y0bwNi7M+QIBPdIAAAAX8ClbAohoOhAsNDJtCXMENfyNZq+simEgKYDwUIn05YIQ9zzVQ1rtOcrGw6y3hF6Mp1Qfi/AL7gim1+JWvyg8QuSMgJqvrLGQrV0iAEAALSQG87JQyXPr+IVAAAAAElFTkSuQmCC" alt="" /></button>
            <button  onClick={() => i18next.changeLanguage("en")}><img className="w-7 h-[1.875rem] after:lg:w-[2.313rem]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO1XC1NTRxTmT/VhrSD4oCNUHorWWrBVKWilIOoMFTClQxkqLyFl2lrbTm07aNGCTAiPEuRtlBbCI4iERwLkYS4JIY+bEEi+zm7ITa4EpAIzdJpv5szcubt79jt7ds9+GxISRBBBBBFESHWtIrlviJnxWvsjzcQHn7SJQmNF1S+zrPwnkv5hw8zo9UrTZEoaS4x8k3+kbSM+iKVl9zQ/6dMpR8tuGSdSL7Aded8WcKl5fK2izlRSBJfFAi/sjmX8dGcM+xMaEBZXv6YJivpof+PVLKh3vUaNfBOQtvXGEot8r5HOw8rlYM58SMfrYqPRVll7m0eQNGij3wHb1Ah/TM9acVEg3RaCnxX0QqtkYCotgnr3G9Ds2YUFYTncrA0PGpWlHMEa8dR1m7ge2kMH6QTM+RQsTU5wJN1uoL5lBodP/bklBE+cewjp33rYOzugi4nyzJmaDOe4gpuTRzAsTpRAonmu0sNUWsxFQ75JNF6YLU4If5AjPF78SgQPHGvAj1VjYKeUmMtIo321kftgvVsFuFzcPKpZC74o7UvnESQODp1swj3RFBwjI779EBMFtrWFl/Zn4yakXOn6VwQzcqVQTszBfOsmNKG7oX7rdRjzBHDNz3N+HYsr+/4Y2feihFUEvXYmsxPypwbYav+AZv9eOqnh8kUsazScs+VlNw2moEK2LsH40y1oapuFvbsLuiMxtF2f+D4WhwZ5Qff0PsfxlFa/FV+HILG98fUoKJfBOKWhkRLHmvA9dAXcTqcv7VbnmgQbWmdgnvYbHxEKyy8/k+i48YzBTudZvVf9CF4S9KSSaANZoXAAf8kY2KVSGHOvwpid5SHpcPBWIBDBJZUS8/l5dIyp6CssM3pfBlxuelC+vCELOC/hxBEkJwabhDEAwc2Ad4rbS6uqSJSbMV1MNEeQfG/WH+HkK9Q5ZSKv851ij3PKRP8dgu07PcUPdvohubRGmSn+ZggyuYE30Dkih1GQQ6NcEJbDZTGvSXDOwC9FRC0tVAo9q3QtG47BAeq/8OvB9cvMi4U64qiY3rk2dsnPuXnVPa1WMvj13viaBD8v7qNFeH5hkfND6ueL151BqaP9yOXw0pskLfsRJlWeVfGClbRAGxXpUR3nPoZjfJxec5EnGjd0F0cnNtP+LiKLVrA0M+0TDAcjqGCQDTE49Wl7YILvJjajrklFpRXnRKXCXPoFTnWQu7l/kEFSWvsrqZnky114qjDxgqeSK9ZzwPQfJcEul9NgjqdKEjmCFd8PZxEpxaWBZeleIakkKTUVFUKvYpBX0r9pPRixsn2sNv/tY+FEq/rtN7FQcQPimgFhwFNMI4o/7Iko6STsQ4N0ZYkU20pFHb+icngHUDEGJvn06jpICBIpZbiS6UnngXBYq+/imcLI6b7tepNk5EqpQPUtpwvWmvvozr95nyPYUfLbHSKlqHNBDszTWo9yPuJTzttFMCyuHvuOivHd7VEsOl2B6yB54k2eT7cNVzXpJZ1qRUKypG6jz8WsLXp2Ejub2dnQ3aubIk/f3+smznIEgwgiiCD+x/gHqa9QfhslI28AAAAASUVORK5CYII=" alt=""/></button>
          </div>
          <div className="flex w-11/12 lg:w-full justify-end self-center">
            <ThemeSwitch onClick={handleChange}/>  
          </div>
           
       </div>
    )
}

export default Navbar; 