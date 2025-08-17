document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const buttons = document.querySelectorAll("nav button");

    // All page content
    const pages = {
        home: `
            <h2>Welcome!</h2>
            <p>
                Hello Everyone. Myself <b>Dana Shein Rebello</b>.
                I am 3rd year BTech student in the department of Artificial Intelligence and Data Science pursuing from Rajagiri School of Engineering and Technology.<br>
                I have done my schooling in United Arab Emirates from KG to 12th grade.</br>

            </p>
        `,
        about: `
            <h2>Resume</h2>
            <p><b>JOB OBJECTIVE:</b><br>
            A recent graduate seeking an opportunity to work as a Junior Engineer 
            to expand my knowledge in the field by working with a reputable company.</p>

            <p><b>EDUCATION:</b></p>
            <ul>
                <li><b>Bachelor of Technology</b> in Artificial Intelligence and Data Science (2023 - Pursuing)<br>
                SGPA: S1 - 9.29, S2 - 9.91, S3 - 9.34, S4 - 9.52</li>
                <li><b>12th Grade, CBSE (AISSCE)</b><br>
                Global Indian School, Ajman, UAE (2021 - 2023)<br>
                Percentage: 87.4%<br>
                Academic background: Physics, Chemistry, Mathematics</li>
                <li><b>10th Grade, CBSE (AISSE)</b><br>
                Global Indian School, Ajman, UAE (2009 - 2021)<br>
                Percentage: 94.6%</li>
            </ul>

            <p><b>ADDITIONAL QUALIFICATIONS:</b></p>
            <ul>
                <li>Python Course completed (Kaggle)</li>
                <li>Add-on Course in Web Programming (Pursuing)</li>
                <li>Honors (Pursuing)</li>
            </ul>

            <p><b>KEY SKILLS:</b></p>
            <ul>
                <li>Microsoft Excel, PowerPoint, Word</li>
                <li>Python, Java, C</li>
                <li>MySQL, HTML</li>
            </ul>

            <p><b>ABILITIES:</b></p>
            <ul>
                <li>Hard Working</li>
                <li>Leadership Qualities</li>
                <li>Problem Solving</li>
                <li>Mathematical Skills</li>
                <li>Adaptability</li>
                <li>Team Collaboration</li>
            </ul>
        `,
        projects: `
            <h2>My Projects</h2>
            <ul>
                <li>
                    <b>Project 1: VOX Cinemas Chatbot</b>
                    <p>The VOX Cinemas Chatbot is an intelligent conversational assistant designed to help moviegoers easily access information about films and showtimes. It provides real-time updates on movie schedules, ticket availability, and ongoing promotions while also offering personalized movie recommendations based on user preferences. 
                    Built using natural language processing, the chatbot understands user queries in a simple and conversational manner, making it easy to navigate and interact with.</p>
                </li>
                <li>
                    <b>Project 2: Movie Recommendation App</b>
                    <p>The Movie Recommendation App is a smart system that suggests films to users based on their preferences and viewing history.
                     It leverages machine learning techniques such as clustering and similarity algorithms to identify patterns in user choices and recommend movies that match their interests. By combining content-based and collaborative filtering approaches, the app delivers accurate and personalized recommendations.
                     With a simple and interactive interface, it helps users discover new movies quickly and enhances their overall viewing experience.</p>
                </li>
                <li>
                    <b>Project 3: Chatbot Assistant</b>
                    <p>The Chatbot Assistant is a versatile conversational AI designed to interact with users in a natural and engaging way. It can answer queries, provide summaries, and assist with everyday tasks across different domains.
                     Built using natural language processing techniques, the chatbot is capable of understanding context and delivering meaningful responses.
                     Its user-friendly interface makes communication smooth and intuitive, while its adaptability allows it to be integrated into various applications, from educational support to personal productivity.</p>
                </li>
            </ul>
        `,
        gallery: `
            <h2>Gallery</h2>
            <img src="https://via.placeholder.com/150" alt="Sample 1">
            <img src="https://via.placeholder.com/150" alt="Sample 2">
            <img src="https://via.placeholder.com/150" alt="Sample 3">
        `,
        contact: `
            <h2>Contact Me</h2>
            <form>
                <label>Name:</label><br>
                <input type="text" name="name"><br>
                <label>Email:</label><br>
                <input type="email" name="email"><br>
                <label>Message:</label><br>
                <textarea name="message"></textarea><br>
                <button type="submit">Send</button>
            </form>
        `
    };

    // Function to load page content
    function loadPage(page) {
        content.innerHTML = pages[page];
        buttons.forEach(btn => btn.classList.remove("active"));
        document.querySelector(`button[data-page="${page}"]`).classList.add("active");
    }

    // Navigation button clicks
    buttons.forEach(button => {
        button.addEventListener("click", () => loadPage(button.dataset.page));
    });

    // Load home page by default
    loadPage("home");
});
