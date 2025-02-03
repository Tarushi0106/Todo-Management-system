import { notFound } from "next/navigation";


export const dynamicParams = true
export async function generateStaticParams() {
    const res = await fetch('http://localhost:7000/task/tasks');
    const data = await res.json()
    const tasks = data.result
    return tasks.map((task) => ({
        id: task.id.toString()
    }))
}
async function getSingleTask(id) {

    const res = await fetch('http://localhost:7000/task/tasks', {
        next: {
            revalidate: 60
        }
    });
    if (!res.ok) {
        notFound();
        return;
    }
    const data = await res.json()
    const task = data.result.find((task) => task.id == id);
    if (!task) {
        notFound();
        return null;
    }
    return task
}
export default async function page({ params }) {
    const id = params.id;
    const task = await getSingleTask(id);
    const priority = ["High" , "Medium","Low"]

    return (
        <div className="w-full flex justify-center items-center min-h-80">
            <main className="md:w-1/2 w-full flex flex-col items-center gap-3 mt-4">
                <h1 className="text-primary text-3xl">Task <span className="text-gray-500 font-bold">Details</span> </h1>
                <div className="form">
                    <h1 className="text-2xl"><span className="text-gray-500 font-bold">name</span> : {task.name}</h1>
                    <h1 className="text-2xl"> <span className="text-gray-500 font-bold">Description: </span> {task.description}</h1>
                    <h1 className="text-2xl"> <span className="text-gray-500 font-bold">Priority: </span> {priority[task.priority-1]}</h1>
                    <h1 className="text-2xl"> <span className="text-gray-500 font-bold">Start Date: </span> { new Date(task.startDate).toLocaleDateString()}</h1>
                    <h1 className="text-2xl"> <span className="text-gray-500 font-bold">End Date: </span> {new Date(task.endDate).toLocaleDateString()}</h1>
                    
                </div>
            </main >
        </div>
    )
}
