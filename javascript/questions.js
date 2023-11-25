import { updateHoverElements } from "./custom-cursor.js";

const questionsData = [
  {
    question: "Why wouldn't I just hire a full-time creator?",
    answer:
      "To save money. 💰 The average salary for senior level designers & developers well exceeds 100k, & that's without including any benefits.\n \n With the monthly plan, you're simply paying for what you need. You can pause or resume anytime you're low on work.",
    answerLength: "xl",
  },
  {
    question: "Do I have a limited number of requests?",
    answer:
      "Nope. 🎉 Once you become a member, you can add as many design or development requests as you'd like. Keep in mind that they are worked on & delivered one by one.",
    answerLength: "md",
  },
  {
    question: "What if I only have a single request?",
    answer:
      "This is where the pause feature shines. ⏸️ Anytime the workload becomes light, you can pause your plan which stops all charges. Then you can easily start up again when you do need our services.",
    answerLength: "md",
  },
  {
    question: "How does the pause feature work?",
    answer:
      "When your workload becomes light, we can put a stop to your subscription, preventing all charges. Since memberships are billed monthly, we'll still be able to provide services for however many days were left when you paused. These remaining days are acceptable anytime in the future!",
    answerLength: "lg",
  },
  {
    question: "How quickly do you deliver?",
    answer:
      "This depends on the size & complexity of the project. 🤔 Most single page, static sites can move from wireframe to launch in about two weeks. Multiple page sites, online shops, or other ambitious projects can take anywhere from four to twelve weeks.",
    answerLength: "lg",
  },
  {
    question: "How do I make a request & track progress?",
    answer:
      "This is done with <a class='page-link' href='https://trello.com/' target='_blank'>Trello</a>; a user-friendly managing tool that makes communication & collaboration simple. In addition to describing the work needed you can also upload images, videos, documents, or links to other resources.",
    answerLength: "lg",
  },
  {
    question: "Who are the designers & developers?",
    answer:
      "AXYS Creative is driven by only two people: Aaron & Bailey Garcia. ✌️ This helps with quick decision making & promotes swift turn around. We can each handle the design & development aspect of the work.",
    answerLength: "md",
  },
  {
    question: "Are there limits to your services?",
    answer:
      "Yes. 🙃 We currently don't offer development for social media type applications that required large data bases. We also don't develop mobile apps of any kind. Possibly in the future though!",
    answerLength: "md",
  },
  {
    question: "What if I'm unsatisfied with the work?",
    answer:
      "We'll continue to revise until you're happy & proud of the work. 😎 Simply put in a request & we'll get started on it.",
    answerLength: "sm",
  },
  {
    question: "Do you offer refunds?",
    answer: "No. At this time we don't offer any refunds.",
    answerLength: "xs",
  },
];

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
