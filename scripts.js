// Professors data
const professors = [
    {
      name: "Bhagirathi Anand",
      subject: "Math",
      rating: 4.8,
      comments: "Great Calculus professor, explains concepts really well and got your back when you struggle through homework.",
      location: "LAC, V-209",
      email: "banand@lbcc.edu",
      phone: "(562) 938-4752"
    },
    {
      name: "Rachel Coleman",
      subject: "Math",
      rating: 3.9,
      comments: "Really good professor, teaches on time, gives extra credit. Solid pick.",
      location: "LAC, V-205",
      email: "rcoleman@lbcc.edu",
      phone: "(562) 938-4977"
    },
    {
      name: "Ratanamumy Ngo",
      subject: "Math",
      rating: 2.5,
      comments: "If he's your only option, just be ready. No cheat sheets, tough homeworks, and you're mostly on your own.",
      location: "LAC, V-221",
      email: "rngo@lbcc.edu",
      phone: "(562) 938-4616"
    },
    {
      name: "Steve Christopher",
      subject: "Biology and Bio Lab",
      rating: 3.5,
      comments: "Nice guy but class is dense. Long readings, slow email replies. Not bad, just pace yourself.",
      location: "PCC EE-212",
      email: "schristopher118@lbcc.edu",
      phone: "(562) 938-3792"
    },
    {
      name: "Tahir Aziz",
      subject: "Computer Science",
      rating: 4.1,
      comments: "Everything’s virtual. Chill but you’ll need to do most stuff solo. Ask questions when you need help.",
      location: "LAC, M-125",
      email: "taziz@lbcc.edu",
      phone: "(562) 938-4885"
    },
    {
      name: "Kyle Muldrow",
      subject: "Computer Science",
      rating: 4.8,
      comments: "Very knowledgeable. Class is in-person and deep. Not for last-minute grinders — be ready.",
      location: "PCC, AA206G",
      email: "kmuldrow@lbcc.edu",
      phone: "(562) 938-3005"
    }
  ];
  
  // Counselors data
  const counselors = [
    {
      name: "Judy Oh",
      department: "General Counselling",
      rating: 4.2,
      comments: "If you don’t want to waste time with useless classes — she’s got you. Fast-track to graduation.",
      location: "LAC, A-1091",
      email: "joh@lbcc.edu",
      phone: "(562) 938-4359"
    },
    {
      name: "Brandon Douglas",
      department: "EOPS",
      rating: 4.9,
      comments: "Hands down one of the best. Knows his stuff, easy to talk to. Just book early — he’s popular!",
      location: "LAC-A-1134",
      email: "bdouglas@lbcc.edu",
      phone: "(562) 938-5531"
    },
    {
      name: "Robert Olmos",
      department: "Science and Technology",
      rating: 4.1,
      comments: "STEM students — he’s your guy. Lots of transfer info, mostly online, and super reliable.",
      location: "LAC, D-149",
      email: "rolmos@lbcc.edu",
      phone: "(562) 938-3071"
    },
    {
      name: "Jacqueline Garcia Hernandez",
      department: "Transfer and Counselling",
      rating: 4.1,
      comments: "Transfer queen. Will help with apps, recommendations, and make sure your stuff looks tight.",
      location: "LAC, A-1134",
      email: "jgarciahernandez@lbcc.edu",
      phone: "562-938-4569"
    },
    {
      name: "Marcia Nystrom",
      department: "Honors",
      rating: 4.7,
      comments: "All about that 4.0 grind? She’s your go-to. But she’s *always* booked, so plan way ahead.",
      location: "LAC, L-164",
      email: "mnystrom@lbcc.edu",
      phone: "(562) 938-4354"
    },
    {
      name: "Yolanda Padilla",
      department: "EOPS",
      rating: 3.8,
      comments: "Good for quick, last-minute questions. Won’t go deep, but will help you pick classes and move on.",
      location: "LAC, A-1149",
      email: "ypadilla@lbcc.edu",
      phone: "(562) 938-4672"
    },
    {
      name: "Melissa Keith",
      department: "Nextup",
      rating: 4.6,
      comments: "She’s the kind of counselor who buys you books. Snacks in her office too. You’ll feel safe and seen here.",
      location: "LAC, A-1134",
      email: "mkeith@lbcc.edu",
      phone: "(562) 938-3216"
    }
  ];
  
  // Search Professors
  function searchProfessors() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const selectedDept = document.getElementById("department-filter").value;
    const selectedRating = parseFloat(document.getElementById("rating-filter").value) || 0;
    const resultsContainer = document.getElementById("results");
  
    const filtered = professors.filter(prof =>
      prof.name.toLowerCase().includes(searchInput) &&
      (selectedDept === "" || prof.subject === selectedDept) &&
      prof.rating >= selectedRating
    );
  
    displayResults(filtered, "professor", resultsContainer);
  }
  
  // Search Counselors
  function searchCounselors() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const selectedDept = document.getElementById("department-filter").value;
    const selectedRating = parseFloat(document.getElementById("rating-filter").value) || 0;
    const resultsContainer = document.getElementById("results");
  
    const filtered = counselors.filter(counselor =>
      counselor.name.toLowerCase().includes(searchInput) &&
      (selectedDept === "" || counselor.department === selectedDept) &&
      counselor.rating >= selectedRating
    );
  
    displayResults(filtered, "counselor", resultsContainer);
  }
  
 
  function displayResults(data, type, container) {
    container.innerHTML = "";
  
    if (data.length === 0) {
      container.innerHTML = "<p style='color: white;'>No results found.</p>";
      return;
    }
  
    data.forEach(person => {
      const div = document.createElement("div");
      div.className = "result-card";
      div.innerHTML = `
        <h2>${person.name}</h2>
        <p><strong>${type === "professor" ? "Subject" : "Department"}:</strong> ${type === "professor" ? person.subject : person.department}</p>
        <p><strong>Rating:</strong> ${person.rating}/5</p>
        <p><strong>Comments:</strong> ${person.comments}</p>
        <p><strong>Location:</strong> ${person.location}</p>
        <p><strong>Email:</strong> <a href="mailto:${person.email}" style="color: #ffcc00;">${person.email}</a></p>
        <p><strong>Phone:</strong> ${person.phone}</p>
      `;
      container.appendChild(div);
    });
  
    const disclaimer = document.createElement("div");
    disclaimer.style.marginTop = "2rem";
    disclaimer.style.fontSize = "0.9rem";
    disclaimer.style.color = "white";
    disclaimer.innerHTML = `
      <hr style="margin: 1rem 0;" />
      <p><strong>Disclaimer:</strong> This is a fun personal project for SNAP Academies. It’s not meant to criticize anyone. All feedback shown is based on informal student opinions. Data is currently from Long Beach City College only.</p>
    `;
    container.appendChild(disclaimer);
  }
  