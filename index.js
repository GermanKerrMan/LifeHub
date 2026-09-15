let sidebar_btns = [
    "dashboard-btn", "health-btn", "fitness-btn", "nutrition-btn", "sleep-btn", "goals-btn",
     "habits-btn", "tasks-btn", "mind-btn", "journal-btn", "finance-btn", 
     "learning-btn", "ai-btn", "reports-btn", "settings-btn", "profile-btn"
    ]

let active_sidebar_btn = "dashboard-btn"

for (let i = 0; i < sidebar_btns.length; i++) {
    let btn = document.getElementById(sidebar_btns[i])
    btn.addEventListener("click", (event) => {
       console.log(btn.getElementsByClassName("nav-item"))
       document.getElementById(active_sidebar_btn).getElementsByClassName("nav-item").className = "nav-item"
       active_sidebar_btn = sidebar_btns[i]
       btn.getElementsByClassName("nav-item").className = "nav-item.active"
    })
}

function updateProgress(current, total) {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    if (total <= 0) return;
    
    const percentage = current / total;
    const circumference = 490; // 2 * π * 78 ≈ 490
    const offset = circumference - (percentage * circumference);
    
    // Update circle
    progressBar.style.strokeDashoffset = offset;
    
    // Update text
    progressText.innerHTML = `${current}/${total}`;
}
        
updateProgress(2, 5)


// let count = 0;
// const total = 6;

// setInterval(() => {
//     count = Math.min(count + 1, total);
//     updateProgress(count, total);
// }, 800);