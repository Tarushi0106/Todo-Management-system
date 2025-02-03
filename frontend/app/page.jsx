import { Suspense } from "react";
import Tasks from "./tasks/page";
import Loading from "./loading";
export default function Home() {
  return (
    <main >
      <Suspense fallback={<Loading />}>
        <Tasks />

      </Suspense>
    </main>
  );
}
