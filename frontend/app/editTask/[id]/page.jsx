import EditTaskForm from "@/app/components/EditTaskForm";
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
            revalidate: 0
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
        return;
    }
    return task
}
export default async function EditTask({ params }) {
    const task = await getSingleTask(params.id);
    const { name, description, priority, startDate, endDate } = task;
    const id = params.id;
    return (
        <div className="w-full flex justify-center items-center min-h-80">
            <main className="md:w-1/2 w-full flex flex-col items-center gap-3 mt-4">
                <h2 className="text-primary text-3xl" >Update <span className="text-gray-500 font-bold">Task</span></h2>
                <EditTaskForm id={id} name={name} description={description} priority={priority} startDate={startDate} endDate={endDate} />
            </main>
        </div>


    )
}
