import CreateForm from "./CreateForm";

export default function page() {
    return (
        <>
            <div className="w-full flex justify-center items-center min-h-80">
                <main className="md:w-1/2 w-full flex flex-col items-center gap-3 mt-4">
                    <h2 className="text-primary text-3xl" >Add <span className="text-gray-500 font-bold">Task</span></h2>
                    <CreateForm />
                </main>
            </div>
        </>
    )
}
