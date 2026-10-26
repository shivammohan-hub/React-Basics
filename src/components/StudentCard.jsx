// 1. Student Profile Cards

// Create a `StudentCard` component that accepts student name, course, and marks through props. Display at least 4 student cards using the same component.


export default function StudentCard(props) {
    let studentName = props.name
    let course = props.course
    let marks = props.marks
    return (
        <div className="flex flex-col gap-2 border w-fit p-5 m-5">
            <p>Student Name : {studentName}</p>
            <p>Course : {course}</p>
            <p>Marks : {marks}</p>
        </div>
    )
}