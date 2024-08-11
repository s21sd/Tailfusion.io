"use client"
import Card from '@/app/DescriptionCard/Card'
import React, { lazy, useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area';
const TabsDemo = lazy(() => delayForDemo(import('../../Codetabs/Tabs')));
async function delayForDemo(promise: any) {
    await new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
    return promise;
}
const page = () => {
    const [valueOfTheComponent, setValueOfTheComponent] = useState<number>(1);
    return (
        <ScrollArea className='text-white h-full max-h-screen overflow-y-auto p-3 mt-4 ml-6'>
            <Card contentVal={valueOfTheComponent} />
            <div className='flex flex-col gap-3'>
                <TabsDemo valueOfTheComponent={valueOfTheComponent} codevalue={0} />
                <TabsDemo valueOfTheComponent={valueOfTheComponent} codevalue={1} />
                <TabsDemo valueOfTheComponent={valueOfTheComponent} codevalue={2} />
                <TabsDemo valueOfTheComponent={valueOfTheComponent} codevalue={3} />
            </div>
        </ScrollArea>
    )
}

export default page