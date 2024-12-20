import { Student } from "@/app/types/member";
import MemberCard from "./MemberCard";

type Props = {
    id: string;
    title: string;
    students: Student[];
};

export default function MemberSection({ id, title, students }: Props) {
    return (
        <>
            <a className="bookmark-anchor" id={id}></a>
            <div className="page-header">
                <h3>{title}</h3>
            </div>

            <div className="row">
                {students.map((student) => (
                    <MemberCard key={student.name} student={student} />
                ))}
            </div>

            <hr />
        </>
    );
} 