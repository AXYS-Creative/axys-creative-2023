import { updateHoverElements } from "./custom-cursor.js";

const questionsData = [
  {
    question: "Are there limits to your services?",
    answer:
      "Yes. 😔 We currently don't offer development work for social media type applications that required large data bases. We also don't develop mobile apps of any kind.",
    answerLength: "md",
  },
  {
    question: "Why wouldn't I just hire a full-time creator?",
    answer:
      "To save money. 💰 The average salary for senior level designers & developers well exceeds 100k, & that's not including any benefits.\n \n With the monthly plan, you're simply paying for what you need. You can pause or resume anytime you're low on work.",
    answerLength: "xl",
  },
  {
    question: "Do I have a limited number of requests?",
    answer:
      "No. 🎉 Once you become a member, you can add as many design or development requests as you'd like. Keep in mind that they are worked on & delivered one by one.",
    answerLength: "md",
  },
  {
    question: "How quickly can we move from concept to launch?",
    answer:
      "This depends on the size of the project. 🤔 Most single page, static sites can be go through the entire process of design to production launch in about two weeks. Multiple page sites, online shops, or other ambitious projects can take anywhere from four to twelve weeks.",
    answerLength: "lg",
  },
  {
    question: "Who are the designers & developers?",
    answer:
      "AXYS Creative is run by just two people: Aaron & Bailey Garcia. We each handle the design & development aspect of the work.",
    answerLength: "",
  },
  {
    question: "How do I request a design & track progress?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
    answerLength: "",
  },
  {
    question: "What if I'm unsatisfied with the design?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
    answerLength: "",
  },
  {
    question: "What if I only have a single request?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, dolorem?",
    answerLength: "",
  },
];

export function renderQuestions() {
  const questionsContent = document.querySelector(".questions-content");

  let htmlString = "";

  questionsData.forEach(({ question, answer, answerLength }, index) => {
    const formattedAnswer = answer.replace(/\n/g, "<br>");

    htmlString += `
              <div class="faq-item faq-item-${answerLength}">
                <button class="question page-link">
                    <h3>
                      <span class="question-indicator">Q.</span>
                      ${question}
                    </h3>
                    <svg class="angle-arrow" width="31" height="19" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.8 0L15.2 11.4L26.6 0L30.4 3.8L15.2 19L0 3.8L3.8 0Z" fill="#232323"/>
                    </svg>
                </button>
                <div class="answer" id="answer-${index}">
                  <span class="answer-indicator">A.</span>
                  <p>${formattedAnswer}</p>
                </div>
              </div>
          `;
  });

  questionsContent.innerHTML = htmlString;

  updateHoverElements();
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
          otherItem.classList.remove("active");
        }
      });

      item.classList.toggle("active");
      answerDiv.classList.toggle("active");
      angleArrow.classList.toggle("active");
    });
  });
}

questions();
