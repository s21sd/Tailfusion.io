"use client"
import BoxReveal from "@/components/magicui/box-reveal";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function BoxRevealDemo() {
    const router = useRouter();
    const [boxColor, setBoxColor] = useState('#fff2c1');
    const handleClick = () => {
        window.location.href = "https://github.com/s21sd/Tailfusion.io";
    };

    useEffect(() => {
        // Ensure this code runs only on the client side
        const theme = localStorage.getItem('theme');
        setBoxColor(theme === 'dark' ? '#9e4ceb' : '#fff2c1');
    }, []);
    return (
        <div className="h-full w-full flex flex-col mx-auto items-center justify-center overflow-hidden ">
            <BoxReveal boxColor={boxColor} duration={0.5}>
                <p className="text-[1.5rem] sm:text-[2.5rem] font-semibold text-[#fff2c1] dark:text-[#9e4ceb]">
                    TailFusion UI<span className="text-[#fff2c1] dark:text-[#9e4ceb]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={boxColor} duration={0.6}>
                <h2 className="mt-[.5rem] text-[1rem] text-white dark:text-black">
                    UI library for{" "}
                    <span className="text-[#fff2c1] dark:text-[#9e4ceb]">Developers</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={boxColor} duration={0.7}>
                <div className=" text-center mx-auto mt-[1.5rem] w-[85%] sm:min-w-[14rem] text-xs sm:text-xl ">
                    <p className="text-white dark:text-black">
                        16+ free and open-source animated components built with
                        <span className="font-semibold text-[#fff2c1] dark:text-[#9e4ceb]"> React</span>,
                        {/* <span className="font-semibold text-[#fff2c1] dark:text-[#9e4ceb]"> Typescript</span>, */}
                        <span className="font-semibold text-[#fff2c1] dark:text-[#9e4ceb]"> Tailwind</span>
                        . <br />
                        Easily copy and paste the most trending components with provided React, Tailwind, HTML and CSS code, integrate them into your projects without worrying about styling.. <br />
                    </p>
                </div>
            </BoxReveal>
            <div className="grid sm:flex  items-center justify-center gap-4 mt-4 text-sm">
                <BoxReveal boxColor={boxColor} duration={0.5}>
                    <div onClick={() => router.push('components/blocks/cards')} className="bg-[#fff2c1] p-6 hover:bg-gray-50 rounded-md w-[230px] cursor-pointer font-semibold text-black flex justify-center items-center mx-auto dark:hover:bg-[#c98fff] dark:bg-[#9e4ceb] dark:text-white">Browse Components</div>
                </BoxReveal>
                <BoxReveal boxColor={boxColor} duration={0.5}>
                    <div onClick={handleClick} className="border rounded-md p-4 w-[230px] font-semibold cursor-pointer text-white border-[#fff2c1] dark:border-[#9e4ceb] dark:text-black flex justify-center items-center mx-auto gap-4"><FaGithub size={32} />
                        <h1>GitHub</h1></div>
                </BoxReveal>
            </div>
        </div>
    );
}
