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

    // upArrow.forEach((arrow, index) => {
    //     arrow.addEventListener("click", () => {
    //         downArrow[index].classList.toggle("active");
    //     });
    // })
}

questions();