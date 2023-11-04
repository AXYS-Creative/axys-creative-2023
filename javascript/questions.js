const questionsData = [
  {
    question: "Are there limits to design and development services?",
    answer:
      "A. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
  },
  {
    question: "Why wouldn't I just hire a full-time developer?",
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

  questionsData.forEach(({ question, answer }, index) => {
    htmlString += `
              <div class="faq-item">
                <button class="question page-link">
                  <span>
                      <p>Q.</p>
                      <h3>${question}</h3>
                      <svg class="angle-arrow" width="31" height="19" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.8 0L15.2 11.4L26.6 0L30.4 3.8L15.2 19L0 3.8L3.8 0Z" fill="#232323"/></svg>
                  </span>
                </button>
                <div class="answer" id="answer-${index}">${answer}</div>
              </div>
          `;
  });

  questionsContent.innerHTML = htmlString;
}

renderQuestions();

export function questions() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, index) => {
    const questionButton = item.querySelector(".question");
    const answerDiv = item.querySelector(".answer");
    const angleArrow = item.querySelector(".angle-arrow");

    questionButton.addEventListener("click", () => {
      faqItems.forEach((otherItem, otherIndex) => {
        if (otherIndex !== index) {
          otherItem.querySelector(".answer").classList.remove("active");
          otherItem.querySelector(".angle-arrow").classList.remove("active");
        }
      });

      answerDiv.classList.toggle("active");
      angleArrow.classList.toggle("active");
    });
  });
}

questions();
