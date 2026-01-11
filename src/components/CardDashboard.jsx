import CourseCard from "../components/CourseCard";
import { courses } from "../data/coursesData";

export default function CourseDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Course Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => alert(course.title)}
          />
        ))}
      </div>
    </div>
  );
}
