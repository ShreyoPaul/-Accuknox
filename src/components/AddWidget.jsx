'use client'

import { RxCross2 } from "react-icons/rx"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import { addWidget } from '../redux/dashboardSlice';

const AddWidget = ({ setToggle, toggle, categoryid }) => {
    const [newWidgetName, setNewWidgetName] = useState('');
    const [newWidgetText, setNewWidgetText] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState(categoryid || '');
    const { categories, searchQuery } = useSelector(state => state.dashboard);
    const dispatch = useDispatch();
    const handleAddWidget = () => {
        if (!selectedCategoryId || !newWidgetName || !newWidgetText) return
        const newWidget = {
            id: `widget_${new Date().getTime()}`,
            name: newWidgetName,
            text: newWidgetText,
        };
        console.log(selectedCategoryId)
        dispatch(addWidget({ categoryId: selectedCategoryId, widget: newWidget }));
        setNewWidgetName('');
        setNewWidgetText('');
        setToggle(false)
    };
    console.log(categoryid)
    return (
        <div className={`shadow-xl w-full md:w-[45vw] z-10 min-h-screen bg-white ${!toggle && 'translate-x-[100vw]'} absolute right-0 duration-300 ease-in-out`}>
            <div className="w-full flex flex-row justify-between p-4 bg-[#14147d] text-white items-center">
                <div>Add Widget</div>
                <div onClick={() => setToggle(false)} className="cursor-pointer">
                    <RxCross2 />
                </div>
            </div>
            <div className="flex flex-col p-8 gap-4 h-ful">
                <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={selectedCategoryId} onValueChange={setSelectedCategoryId}>
                        <SelectTrigger id="category">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent >
                            {categories.map(category => (
                                <SelectItem value={category.id} key={category.id}>{category.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="name">Widget Name</Label>
                    <Input id="name" placeholder="Enter widget name" value={newWidgetName} onChange={(e) => setNewWidgetName(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="text">Widget Text</Label>
                    <Textarea id="text" placeholder="Enter widget text" rows={4} value={newWidgetText} onChange={(e) => setNewWidgetText(e.target.value)} />
                </div>
                <div className="flex flex-row-reverse"><Button type="submit" onClick={handleAddWidget}>Create Widget</Button></div>
            </div>


        </div>
    )
}

export default AddWidget