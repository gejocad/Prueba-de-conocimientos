import { db } from "../firebase/firebase-config";

export const loadStudents = async () => {

    const studentsSnap = await db.collection(`students/`).get()
    const students = []

    studentsSnap.forEach(snapHijo => {
        students.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    return students
}

export const loadProgramas = async (id) => {

    const programaSnap = await db.collection(`programa/`).get()
    const programa = []

    programaSnap.forEach(snapHijo => {
        programa.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    return programa
}