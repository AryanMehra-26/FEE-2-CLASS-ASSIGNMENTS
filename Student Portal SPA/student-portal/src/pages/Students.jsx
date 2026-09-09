import { Link } from "react-router-dom";

function Students() {
    return (
        <div>
            <h2>Students</h2>
            <p>Select a student:</p>

            <Link to="/students/101">Student 101</Link>
            <br />
            <Link to="/students/102">Student 102</Link>
        </div>
    );
}

export default Students;