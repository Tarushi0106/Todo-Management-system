"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
export default function CreateForm() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const task = {
            name,
            description,
            priority,
            startDate,
            endDate
        }
        const res = await fetch('http://localhost:7000/task/tasks', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(task)
        }).then(() => {
            router.push('/');
            router.refresh();
        })


    }
    return (
        <form onSubmit={handleSubmit} className="form" >
            <div className="input-label-parent">

                <label className="label-form" >Name: </label>
                <input
                    className="input"
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
            </div>
            <div className="input-label-parent">

                <label className="label-form" >Description: </label>
                <textarea
                    className="input"
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                />
            </div>
            <div className="input-label-parent">

                <label className="label-form" > Priority </label>
                <select className="input" value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="1"> High </option>
                    <option value="2"> Medium </option>
                    <option value="3"> Low </option>
                </select>
            </div>
            <div className="input-label-parent">
                <label className="label-form" >Start Date</label>

                <input
                    className="input"
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                    required
                />
            </div>
            <div className="input-label-parent">

                <label className="label-form" >end Date</label>
                <input
                    className="input"
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                    value={endDate}
                    required
                />
            </div>
            <div className="flex w-full justify-center items-start">

                <button
                    className='button-primary '
                    disabled={isLoading}>
                    {isLoading && <span>Adding Task...</span>}
                    {!isLoading && <span>Add Task</span>}
                </button>
            </div>

        </form>



    )
}
