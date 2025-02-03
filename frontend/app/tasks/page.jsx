import Link from "next/link";
import DeleteTask from "../components/DeleteTask";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
async function getTasks() {
    const res = await fetch('http://localhost:7000/task/tasks', {
        next: {
            revalidate: 0 // to not make the data cashed
        }
    });
    const data = await res.json();
    return data.result;
}
export default async function Tasks() {
    const tasks = await getTasks();
    let taskColor = ["bg-red-500", "bg-blue-500", "bg-green-500",];

    return (
        <>
            <div className="w-full flex flex-col gap-5 pt-4 pb-4">

                {
                    tasks.length > 0 ?



                        tasks.map((task) => (
                            <div key={task.id} className="
                        w-full
                        rounded-lg 
                        flex 
                        bg-white 
                        hover:shadow-xl 
                        shadow-gray-600 
                        h-40 
                        overflow-hidden 
                        relative
                        ">
                                <Link href={`/tasks/${task.id}`} className="cursor-pointer md:p-8 pl-8 w-3/4 flex flex-col justify-center" >
                                    <h1 className="font-bold text-3xl">
                                        {task.name}
                                    </h1>
                                    <h1 className="text-gray-400 md:block hidden">
                                        {
                                            task.description.slice(0, 140)

                                        }
                                        {
                                            task.description.length > 140 ? " . . . " : null
                                        }
                                    </h1>
                                </Link>
                                <div className="flex md:flex-row flex-col justify-center items-end items-center gap-5 w-1/4">
                                    <Link href={`/editTask/${task.id}`}>
                                        <EditNoteIcon className="text-primary hover:text-primaryDark text-4xl" />
                                    </Link>
                                    <DeleteTask id={task.id} name={task.name} />
                                </div>
                                <div className={`absolute right-0 bottom-0 ${taskColor[task.priority - 1]} p-1 rounded-md`}  >
                                    <p>
                                        {
                                            task.priority === 1 ? "high priority" : task.priority === 2 ? "medium priority" : task.priority === 3 ? "Low Priority" : null
                                        }
                                    </p>
                                </div>
                            </div>
                        )) :
                        <div className="w-full flex justify-center  items-center flex-col">
                            <h1>There is No Tasks Yet</h1>
                            <Link className="underline text-primary cursor-pointer hover:text-primaryDark" href="/tasks/create">Start Add Tasks</Link>
                        </div>

                }
            </div>
        </>
    )
}
