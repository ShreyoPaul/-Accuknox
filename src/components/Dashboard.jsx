'use client'

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import AddWidget from "./AddWidget"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RxCross2 } from "react-icons/rx"
import { removeWidget, searchWidgets } from "@/redux/dashboardSlice"

export default function Dashboard() {
    const { categories, searchQuery } = useSelector(state => state.dashboard);
    const dispatch = useDispatch();

    const [toggle, setToggle] = useState(false)
    const [categoryId, setCategoryId] = useState(false)

    useEffect(() => {
        if (toggle) document.body.style.overflowY = 'hidden'
        return () => document.body.style.overflowY = 'scroll'
    }, [toggle])

    const filteredCategories = categories.map(category => ({
        ...category,
        widgets: category.widgets.filter(widget =>
            widget.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
    }));

    const handleRemoveWidget = (categoryId, widgetId) => {
        dispatch(removeWidget({ categoryId, widgetId }));
    };

    const handleSearch = (e) => {
        dispatch(searchWidgets(e.target.value));
    };
    console.log(categoryId)

    return (
        <div className="flex flex-col w-full min-h-screen relative overflow-x-hidden">
            <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
                <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base w-full" prefetch={false}>
                        <span className="text-slate-300">Home </span>
                        <span className="text-slate-300">{">"}</span>
                        <span className="whitespace-nowrap"> Dashboard V2</span>
                    </Link>
                </nav>
                <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="flex-1 ml-auto sm:flex-initial">
                        <div className="relative">
                            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search anything..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </div>
                    </form>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </div>
            </header>
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:p-10 bg-[#f0f1f6]">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">CNAPP Dashboard</h1>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={() => setToggle(!toggle)}>Add Widget</Button>
                        <Select>
                            <SelectTrigger id="time-range">
                                <SelectValue placeholder="Last 7 days" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Last 24 hours</SelectItem>
                                <SelectItem value="7">Last 7 days</SelectItem>
                                <SelectItem value="30">Last 30 days</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-col gap-4 ">
                    {filteredCategories.map(category => (
                        <div className="flex flex-col gap-3" key={category.id}>
                            <div>{category.name}</div>
                            <div className="flex flex-wrap flex-row gap-4 w-full justify-center">
                                {category.widgets.map(widget => (

                                    <Card className="w-[32.2%]" key={widget.id}>
                                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                                            <CardTitle className="text-sm font-semibold">{widget.name}</CardTitle>
                                            <div onClick={() => handleRemoveWidget(category.id, widget.id)} className="cursor-pointer"><RxCross2 /></div>
                                        </CardHeader>
                                        <CardContent className="text-sm">
                                            {widget.text}
                                        </CardContent>
                                    </Card>
                                ))}

                                <Card className="flex items-center justify-center w-[32.2%] min-h-32 ">
                                    <Button variant="outline" onClick={() => {
                                        setCategoryId(category.id)
                                        setToggle(!toggle)
                                    }}>+ Add Widget</Button>
                                </Card>
                            </div>
                        </div>
                    ))}

                </div>
            </main >
            <AddWidget toggle={toggle} setToggle={setToggle} categoryid={categoryId} />
            {toggle && <div className="w-full min-h-screen bg-[#cccccc73] absolute" onClick={() => setToggle(false)} />}
        </div >
    )
}


function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}