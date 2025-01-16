
import NotePicker from "@/components/NotePicker";
import Notes from "@/components/Notes";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full pb-4">
      <NotePicker />
      <Notes />
    </div>
  );
}
