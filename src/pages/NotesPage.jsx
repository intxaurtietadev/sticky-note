import { useState, useEffect } from 'react';
// import { fakeData as notes} from '../assets/fakeData.js';
import { db } from "../appwrite/databases.js"
import { databases } from '../appwrite/config.js';
import NoteCard from '../components/NoteCard.jsx';

const NotesPage = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const response = await db.notes.list()
        setNotes(response.documents);

    };
    return (
        <div>
            {notes.map((note) => (
                <NoteCard note={note} key={note.$id} />
            ))}
        </div>
    );
};

export default NotesPage;