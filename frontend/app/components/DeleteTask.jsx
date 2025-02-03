"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function DeleteTask({ id, name }) {
    const router = useRouter();

    const handleDeleteTask = async () => {
        const answer = window.confirm(`are you sure you want to delete task : ${name}`);
        if (answer) {

            try {
                const res = await fetch(`http://localhost:7000/task/tasks/${id}`, {
                    method: "DELETE"
                });
                if (res.ok) {
                    router.refresh();
                } else {
                    window.alert("Failed to delete task");
                }
            } catch (error) {
                console.error("An error occurred while deleting the task:", error);
                window.alert("An error occurred while deleting the task", error);
            }
        };
    }

    return (
        <button onClick={handleDeleteTask}>
            <DeleteForeverIcon className='text-primary  hover:text-primaryDark text-4xl' />
        </button>
    );
}