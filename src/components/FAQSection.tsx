import './css/FAQSection.css';

export default function FAQSection() {
  return (
    <section id = "faq" className="faq-section bg-white py-5">
      <div className="container">
        <h2 className="text-center section-title mb-4">Frequently Asked Questions</h2>

        <div className="accordion" id="faqAccordion">

          {/* 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                What is DreamzCricket?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                DreamzCricket is a fantasy cricket platform where users can create virtual teams, join contests, and win real cash based on player performance.
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                How do I participate in contests?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Select an upcoming match, create your fantasy team, and join a contest. Your team's points depend on the real-life performance of selected players.
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                What are Predict & Win and Quiz contests?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Predict & Win allows users to guess match outcomes. Quiz contests test your knowledge about players' performances in batting, bowling, fielding, and more.
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                Is DreamzCricket free to play?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes! DreamzCricket offers both free and paid contests. You can start playing with free contests to get familiar with the platform.
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                How is the winner decided in a contest?
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Winners are selected based on the total fantasy points scored by their selected players in real matches. The leaderboard is updated live.
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                Can I edit my team after joining a contest?
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                You can edit your team any number of times before the match deadline. Once the match starts, no changes can be made.
              </div>
            </div>
          </div>

          {/* 7 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven">
                How do I withdraw my winnings?
              </button>
            </h2>
            <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                You can withdraw winnings directly to your bank account or digital wallet after completing KYC verification.
              </div>
            </div>
          </div>

          {/* 8 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight">
                Is it legal to play fantasy cricket on DreamzCricket?
              </button>
            </h2>
            <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                Yes, fantasy sports is recognized as a game of skill and is legal in most states of India. Please check local laws for any specific restrictions. <br /><br />
                ⚠️ <strong>Important:</strong> If you are accessing this site from <strong>Andhra Pradesh, Assam, Telangana, Sikkim, or Nagaland</strong>, we hope you enjoy our practice contests. However, the law in these states is unclear regarding games of skill played with entry fees for cash prizes. Therefore, users from these states are prohibited from participating in paid contests on DreamzCricket.
                </div>
            </div>
          </div>

          {/* 9 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine">
                What makes DreamzCricket unique?
              </button>
            </h2>
            <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Apart from classic fantasy contests, we offer engaging formats like Predict & Win, Quizzes, and exclusive fan-based challenges.
              </div>
            </div>
          </div>

          {/* 10 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTen">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen">
                Where can I download the DreamzCricket app?
              </button>
            </h2>
            <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                You can download the DreamzCricket app directly from our website. Just click on the "Download the App" button on the homepage.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
