import { useParams } from "react-router-dom";

// Project detail page
function ProjectDetail() {
  const { slug } = useParams();

  return (
    <main>
      <h1>Project Detail</h1>

      <p>
        Project: {slug}
      </p>
    </main>
  );
}

export default ProjectDetail;