const questionsData = [
  {
    question: "Are there limits to design and development services?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "Why wouldn't I just hire a full-time designer & developer?",
    answer:
      "A. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "Do I have a limited number of requests?",
    answer:
      "A. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "How fast is the process from wireframe to launch?",
    answer:
      "A. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "Who are the designers & developers?",
    answer:
      "A. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "How do I request a design and track progress?",
    answer:
      "A. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "What if I'm unsatisfied with the design?",
    answer:
      "A. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "What if I only have a single request?",
    answer:
      "A. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
];

export function renderQuestions() {
  const questionsContent = document.querySelector(".questions-content");

  let htmlString = "";

  questionsData.forEach(({ question, answer }) => {
    htmlString += `
              <button class="question page-link">
                <span>
                    <p>Q.</p>
                    <h3 class="question">${question}</h3>
                    <svg width="31" height="19" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.8 0L15.2 11.4L26.6 0L30.4 3.8L15.2 19L0 3.8L3.8 0Z" fill="#232323"/></svg>
                </span>

                  <p class="answer">${answer}</p>
              </button>
          `;
  });

  questionsContent.innerHTML = htmlString;
}

renderQuestions();

export function questions() {
  const faqQuestion = document.querySelectorAll(".question");
  const faqAnswer = document.querySelectorAll(".answer");
  // const downArrow = document.querySelectorAll(".arrow-down");
  // const upArrow = document.querySelectorAll(".arrow-up");

  faqQuestion.forEach((question, index) => {
    question.addEventListener("click", () => {
      faqAnswer[index].classList.toggle("active");
    });
  });
}

questions();
