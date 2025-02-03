"use client"
import { useRouter } from "next/navigation"
import { useState } from "react";

export default function EditTaskForm({ id, name, description, priority, startDate, endDate }) {
    const [newName, setName] = useState(name);
    const [newDescription, setDescription] = useState(description);
    const [newPriority, setNewPriority] = useState(priority);
    const [newStartDate, setNewStartDate] = useState(startDate);
    const [newEndDate, setNewEndDate] = useState(endDate);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(typeof (newStartDate), newStartDate);
        console.log(typeof (newEndDate), newEndDate);
        const task = {
            name: newName, description: newDescription, priority: newPriority, startDate: newStartDate, endDate: newEndDate
        }
        try {
            const res = await fetch(`http://localhost:7000/task/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            });

            if (res.ok) {
                router.push('/');
                router.refresh();
            } else {
                const errorData = await res.json();
                console.error('Failed to update task:', errorData);
            }
        } catch (error) {
            console.error('Error updating task:', error);
        } finally {
            setIsLoading(false);
        }
    }
    return (


        <form onSubmit={handleSubmit} className="form">

            <div className="input-label-parent">
                <label className="label-form">Name: </label>
                <input
                    className="input"
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    value={newName}
                    required
                />
            </div>

            <div className="input-label-parent">
                <label className="label-form" >Description: </label>
                <textarea
                    className="input"
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={newDescription}
                    required
                />
            </div>
            <div className="input-label-parent">

                <label className="label-form" >priority : </label>
                <select className="input" value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>

                </select>
            </div>
            <div className="input-label-parent">

                <label className="label-form" >startDate: </label>
                <input
                    className="input"
                    type="date"
                    onChange={(e) => setNewStartDate(e.target.value)}
                    value={newStartDate.slice(0, 10)}
                    required
                />
            </div>
            <div className="input-label-parent">

                <label className="label-form">endDate: </label>
                <input
                    className="input"
                    type="date"
                    onChange={(e) => setNewEndDate(e.target.value)}
                    value={newEndDate.slice(0, 10)}
                    required
                />

            </div >
            <div className="flex w-full justify-center items-start">

                <button
                    className="button-primary"
                    disabled={isLoading}>
                    {isLoading && <span>Updating Task...</span>}
                    {!isLoading && <span>Update Task</span>}
                </button>

            </div>
        </form>

    )
}
