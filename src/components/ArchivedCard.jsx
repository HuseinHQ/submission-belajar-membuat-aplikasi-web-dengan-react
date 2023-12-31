/* eslint-disable react/prop-types */
import { showFormattedDate } from "../utils/index";

export default function ArchivedCard({ data, notes, setNotes, archivedNotes, setArchivedNotes }) {
  const moveHandler = (e) => {
    e.preventDefault();
    const newArchivedNotes = archivedNotes.filter((archivedNote) => archivedNote.id !== data.id);
    setArchivedNotes(newArchivedNotes);
    setNotes([...notes, data]);
  };

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">{showFormattedDate(data.createdAt)}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.body}</p>
      <div className="flex gap-2">
        <a
          onClick={moveHandler}
          href=""
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Pindahkan
        </a>
      </div>
    </div>
  );
}
