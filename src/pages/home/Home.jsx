import Welcome from "./components/Welcome";
import LastAnswersQuestions from "./components/LastAnswersQuestions";

function Home() {
  return (
    <section className="mx-[6.25rem]">
      <Welcome />
      <LastAnswersQuestions />
    </section>
  );
}

export default Home;
