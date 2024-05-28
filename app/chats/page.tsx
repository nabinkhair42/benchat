import React from "react";
import Logo from "@/public/logo/logo.png";
import Image from "next/image";
import {
  Plus,
  CircleHelp,
  Atom,
  Apple,
  Lightbulb,
  SearchIcon,
  SendHorizonal,
} from "lucide-react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/app/chats/components/resize";
import { clear } from "console";

const page = () => {
  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[100vh] w-full rounded-lg border"
      >
        <ResizablePanel
          defaultSize={15}
          minSize={15}
          maxSize={16}
          className="border w-fit-content px-2 bg-gray-50 hidden lg:block"
        >
          <div className="flex h-full justify-center pt-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="w-8 h-8 bg-contain drop-shadow-xl hidden md:block"
                  draggable="false"
                />
                <p className="flex gap-1 items-center font-medium ">
                  BenChat
                  <span className="p-1 bg-orange-100 text-purple-500 rounded-md">
                    v.0.1.1
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <h1 className="font-medium flex justify-between items-center">
                  Active Chats{" "}
                  <button className="bg-purple-100 rounded-full p-1">
                    <Plus />
                  </button>
                </h1>
                <ul className="mt-8">
                  <div>All Chats Will Be Visible Here</div>
                </ul>
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={85}>
          <div className="flex flex-col h-full items-center justify-between p-6 border">
            <div className="flex flex-col gap-6 items-center justify-center mt-48">
              <Image
                src={Logo}
                alt="Logo"
                className="w-16 h-16"
                draggable="false"
              />
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-2">
                <div className="shadow-lg border p-2 w-40 h-[100px] rounded-lg border-gray-100 text-left flex flex-col gap-2">
                  <CircleHelp className="text-orange-500" />
                  <p>Explain General Relativity.</p>
                </div>
                <div className="shadow-lg border p-2 w-40 h-[100px] rounded-lg border-gray-100 text-left flex flex-col gap-2">
                  <Atom className="text-purple-500" />
                  <p>Explain Atomic Contraction.</p>
                </div>
                <div className="shadow-lg border p-2 w-40 h-[100px] rounded-lg border-gray-100 text-left flex flex-col gap-2">
                  <Lightbulb className="text-yellow-500" />
                  <p>Explain Planks Theroy.</p>
                </div>
                <div className="shadow-lg border p-2 w-40 h-[100px] rounded-lg border-gray-100 text-left flex flex-col gap-2">
                  <Apple className="text-pink-500" />
                  <p>Define Newtons Law.</p>
                </div>
              </div>
            </div>
            <div className="w-full flex px-4 py-2 rounded-lg gap-2 bottom-0 right-0 left-0">
              {/* <Input
                label="text"
                type="text"
                isClearable
                radius="lg"
                classNames={{
                  label: "text-black/50 dark:text-white/90",  
                }}
                placeholder="Type to search..."
                className="w-full border  px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-800"
              /> */}
              <button className="p-1 bg-purple-500 rounded-md flex items-center justify-center text-white px-3 gap-2">
                <SendHorizonal />
                <span className="hidden lg:block">Send</span>
              </button>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default page;
