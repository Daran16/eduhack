// Example scholarships data
const scholarships = [
    { name: "National Scholarship", eligibility: "Undergraduates", deadline: "30th Nov 2024", link: "#" },
    { name: "Merit-Based Scholarship", eligibility: "Top 10% Students", deadline: "15th Dec 2024", link: "#" }
  ];
  
  // Example exams data
  const exams = [
    { name: "GATE 2025", deadline: "15th Dec 2024" },
    { name: "UPSC Prelims 2025", date: "2nd Feb 2025" }
  ];
  
  // Render scholarships
  const scholarshipCards = document.getElementById("scholarship-cards");
  scholarships.forEach(scholarship => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${scholarship.name}</h3>
      <p>Eligibility: ${scholarship.eligibility}</p>
      <p>Deadline: ${scholarship.deadline}</p>
      <a href="${scholarship.link}" class="btn">Apply Now</a>
    `;
    scholarshipCards.appendChild(card);
  });
  
  // Render exams
  const examList = document.getElementById("exam-list");
  exams.forEach(exam => {
    const li = document.createElement("li");
    li.textContent = `${exam.name}: Deadline ${exam.deadline || "N/A"} Date: ${exam.date || "TBD"}`;
    examList.appendChild(li);
  });
  
  // Handle leave form submission
  document.getElementById("leave-form").addEventListener("submit", event => {
    event.preventDefault();
    const type = document.getElementById("leave-type").value;
    const date = document.getElementById("leave-date").value;
    const reason = document.getElementById("leave-reason").value;
  
    if (date && reason) {
      alert(`Leave/OD submitted!\nType: ${type}\nDate: ${date}\nReason: ${reason}`);
    } else {
      alert("Please fill all fields.");
    }
  });
  