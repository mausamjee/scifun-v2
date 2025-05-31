document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.navbar nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Active Page Link Styling
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.navbar nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Placeholder for "Start Free Demo"
    const demoButton = document.getElementById('startDemoBtn');
    if (demoButton) {
        demoButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Starting Free Demo! (This would typically redirect or open a modal)');
        });
    }

    // Placeholder for "Explore Courses"
    const exploreCoursesBtn = document.getElementById('exploreCoursesBtn');
    if (exploreCoursesBtn) {
        exploreCoursesBtn.addEventListener('click', () => {
            window.location.href = 'courses.html';
        });
    }

    // Courses Page: Watch Demo buttons
    const watchDemoButtons = document.querySelectorAll('.watch-demo-btn');
    watchDemoButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const courseName = e.target.closest('tr').querySelector('td:first-child').textContent;
            alert(`Showing demo for ${courseName}. (This would open a video player or modal)`);
        });
    });
    
    // Courses Page: Join Now buttons
    const courseJoinButtons = document.querySelectorAll('.course-join-btn');
    courseJoinButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const courseName = e.target.closest('.course-item-wrapper').dataset.course; // Assumes you add data-course to a wrapper
            alert(`Redirecting to Join Now page for ${courseName}...`);
            window.location.href = 'join-now.html'; // Potentially pass course info via query params
        });
    });

    // Join Now Page: Auto Apply Discount (Simplified for Prototype)
    const classDropdown = document.getElementById('studentClass');
    const discountMessage = document.getElementById('discountMessage');
    const joinNowForm = document.getElementById('joinNowForm');

    if (classDropdown && discountMessage) {
        // Simulate mobile detection for prototype
        const isMobile = window.innerWidth <= 768; // Basic check, real detection is more complex
        
        classDropdown.addEventListener('change', () => {
            if (classDropdown.value === '12' && isMobile) {
                discountMessage.style.display = 'block';
            } else {
                discountMessage.style.display = 'none';
            }
        });
        // Initial check if 12th is pre-selected on mobile (though unlikely)
        if (classDropdown.value === '12' && isMobile) {
             discountMessage.style.display = 'block';
        }
    }

    if (joinNowForm) {
        joinNowForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted! Confirmation and learning start details would be sent. (Backend processing needed)');
            joinNowForm.reset();
            if (discountMessage) discountMessage.style.display = 'none';
        });
    }
    
    // Login Page: Google Login
    const googleLoginBtn = document.getElementById('googleLoginBtn');
    if (googleLoginBtn) {
        googleLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Simulate login process for prototype
            alert('Attempting Google Login... (Firebase/OAuth integration needed)');
            // On successful fake login:
            const userName = prompt("Enter your name (simulating Google fetch):", "Demo User");
            const userEmail = prompt("Enter your email (simulating Google fetch):", "demo@example.com");
            let userGrade = localStorage.getItem('userGrade');

            if (!userGrade) {
                userGrade = prompt("Enter your grade (6-12):");
                localStorage.setItem('userGrade', userGrade); // Store for future
            }
            
            if (userName && userEmail && userGrade) {
                localStorage.setItem('userName', userName);
                localStorage.setItem('userEmail', userEmail);
                // No profile pic simulation for simplicity, but could be done with a placeholder URL
                alert(`Logged in as ${userName}. Redirecting to dashboard...`);
                window.location.href = 'dashboard.html';
            } else {
                alert('Login simulation cancelled or data missing.');
            }
        });
    }

    // Student Dashboard: Populate Info & Logout
    const studentNameEl = document.getElementById('studentName');
    const studentClassEl = document.getElementById('studentClassDisplay'); // Corrected ID
    const studentPhotoEl = document.getElementById('studentPhoto');
    const logoutBtn = document.getElementById('logoutBtn');

    if (studentNameEl && studentClassEl && studentPhotoEl) {
        const userName = localStorage.getItem('userName');
        const userGrade = localStorage.getItem('userGrade');
        // const userPhoto = localStorage.getItem('userPhoto'); // Assuming you'd store this

        if (userName) studentNameEl.textContent = userName;
        else studentNameEl.textContent = "Student Name";

        if (userGrade) studentClassEl.textContent = `Class ${userGrade}`;
        else studentClassEl.textContent = "Class N/A";
        
        // if (userPhoto) studentPhotoEl.src = userPhoto;
        // else studentPhotoEl.src = 'https://via.placeholder.com/60?text=User'; // Default placeholder
        studentPhotoEl.src = 'https://via.placeholder.com/60?text=User'; // Keep placeholder simple

    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userGrade');
            // localStorage.removeItem('userPhoto');
            alert('Logged out successfully!');
            window.location.href = 'login.html';
        });
    }

    // Completion Plan: Download PDF
    const downloadPlanBtn = document.getElementById('downloadPlanBtn');
    if (downloadPlanBtn) {
        downloadPlanBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Downloading Full Plan PDF... (Actual PDF generation/link needed)');
        });
    }
    
    // Mobile specific discount button on Home page
    const mobileJoinBtn = document.getElementById('mobileJoinBtn');
    if(mobileJoinBtn){
        mobileJoinBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Redirecting to Join Now page with discount (logic for mobile detection and applying discount would be more robust)');
            // Simulate passing discount info or relying on Join Now page logic
            window.location.href = 'join-now.html?discount=true&grade=12'; 
        });
    }

});