import Image from "next/image";
import { Student } from "@/app/types/member";

export default function MemberCard({ student }: { student: Student }) {
    return (
        <div className="col-md-6">
            <div className="media member-item">
                <div className="media-left">
                    <Image
                        className="media-object member-image"
                        src={`/images/members/${student.imageName}`}
                        alt={student.name}
                        width={120}
                        height={160}
                    />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">
                        <b>{student.name}</b>
                    </h4>
                    <p>{student.interests}</p>
                    <p>
                        <a href={`mailto:${student.email}`} style={{ color: "#2C3E50" }}>
                            {student.email}
                        </a>
                        <br />
                        {student.website && (
                            <a href={student.website} target="_blank">
                                <i className="fa fa-external-link-square"></i> Website
                            </a>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
} 