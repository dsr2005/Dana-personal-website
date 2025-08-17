document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const buttons = document.querySelectorAll("nav button");

  // NOTE: Insert your OpenWeather API key below
  const OPENWEATHER_KEY = "556177a75e59249e7a36360ce94693d8"; 

  // All page content (semantic sections + articles)
  const pages = {
    home: `
      <section>
        <h2>Welcome!</h2>
        <article>
          <p>
          Hello Everyone. Myself <b>Dana Shein Rebello</b>.
                I am 3rd year BTech student in the department of Artificial Intelligence and Data Science pursuing from Rajagiri School of Engineering and Technology.<br>
                I have done my schooling in United Arab Emirates from KG to 12th grade.</br>
          </p>
        </article>
      </section>
    `,

    about: `
      <section aria-labelledby="resume-title">
        <h2 id="resume-title">Resume</h2>

        <article>
          <h3>Job Objective</h3>
          <p>
            A recent graduate seeking an opportunity to work as a Junior Engineer
            to expand my knowledge in the field by working with a reputable company.
          </p>
        </article>

        <article>
          <h3>Education</h3>
          <ul>
            <li><b>Bachelor of Technology</b> in Artificial Intelligence and Data Science (2023 - Pursuing)<br>
                SGPA: S1 - 9.29, S2 - 9.91, S3 - 9.34, S4 - 9.52</li>
            <li><b>12th Grade, CBSE (AISSCE)</b><br>
                Global Indian School, Ajman, UAE (2021 - 2023)<br>
                Percentage: 87.4% | Academic background: Physics, Chemistry, Mathematics</li>
            <li><b>10th Grade, CBSE (AISSE)</b><br>
                Global Indian School, Ajman, UAE (2009 - 2021)<br>
                Percentage: 94.6%</li>
          </ul>
        </article>

        <article>
          <h3>Additional Qualifications</h3>
          <ul>
            <li>Python Course completed (Kaggle)</li>
            <li>Add-on Course in Web Programming (Pursuing)</li>
            <li>Honors (Pursuing)</li>
          </ul>
        </article>

        <article>
          <h3>Key Skills</h3>
          <ul>
            <li>Microsoft Excel, PowerPoint, Word</li>
            <li>Python, Java, C</li>
            <li>MySQL, HTML</li>
          </ul>
        </article>

        <article>
          <h3>Abilities</h3>
          <ul>
            <li>Hard Working</li>
            <li>Leadership Qualities</li>
            <li>Problem Solving</li>
            <li>Mathematical Skills</li>
            <li>Adaptability</li>
            <li>Team Collaboration</li>
          </ul>
        </article>
      </section>
    `,

    projects: `
      <section>
        <h2>My Projects</h2>


        <article>
          <h3>Movie Recommendation App</h3>
          <p>
            The Movie Recommendation App is a smart system that suggests films to users
            based on their preferences and viewing history. It leverages machine learning
            techniques such as clustering and similarity algorithms to identify patterns
            in user choices and recommend movies that match their interests. By combining
            content-based and collaborative filtering approaches, the app delivers accurate
            and personalized recommendations. With a simple and interactive interface, it
            helps users discover new movies quickly and enhances their overall viewing experience.
          </p>
        </article>

        <article>
          <h3>Chatbot Assistant</h3>
          <p>
            The Chatbot Assistant is a versatile conversational AI designed to interact with
            users in a natural and engaging way. It can answer queries, provide summaries, and
            assist with everyday tasks across different domains. Built using natural language
            processing techniques, the chatbot understands context and delivers meaningful
            responses. Its user-friendly interface makes communication smooth and intuitive,
            while its adaptability allows it to be integrated into various applications,
            from educational support to personal productivity.
          </p>
        </article>

        <article>
          <h3>VOX Cinemas Chatbot</h3>
          <p>
            The VOX Cinemas Chatbot is an intelligent conversational assistant designed to help
            moviegoers easily access information about films and showtimes. It provides real-time
            updates on movie schedules, ticket availability, and ongoing promotions while also
            offering personalized movie recommendations based on user preferences. Built using
            natural language processing, the chatbot understands user queries in a simple and
            conversational manner. By combining a user-friendly interface with dynamic data
            integration, it enhances the overall movie-going experience.
          </p>
        </article>
      </section>
    `,

    embed: `
  <section>
    <h2>Embedded Content </h2>
    <article class="embed-wrap">
      <h3>Google Map – Kochi, India</h3>
      <iframe
        title="Kochi Map"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Kochi%20India&output=embed">
      </iframe>
      <p class="rss-meta">This map is embedded using a semantic <code>&lt;section&gt;</code> and <code>&lt;article&gt;</code> layout.</p>
    </article>
  </section>
`,


    rss: `
      <section>
        <h2>RSS Feed (Integrated)</h2>
        <article>
          <p class="rss-meta">Below is a sample RSS integration that fetches a feed (converted to JSON) and lists the latest items.</p>
          <div class="weather-form" style="margin-bottom:8px;">
            <input id="rss-url" type="url" placeholder="Enter RSS URL (e.g., https://feeds.bbci.co.uk/news/technology/rss.xml)" />
            <button id="get-rss" type="button">Load RSS</button>
          </div>
          <p id="rss-status" class="rss-meta"></p>
          <ul id="rss-list" class="rss-list" aria-live="polite"></ul>
        </article>
      </section>
    `,

    weather: `
      <section>
        <h2>Weather </h2>
        <article class="weather-card">
          <form class="weather-form" id="weather-form" onsubmit="return false;">
            <input id="city-input" type="text" placeholder="Enter city (e.g., Kochi)" aria-label="City name" />
            <button id="get-weather" type="button">Get Weather</button>
          </form>

          <p id="weather-status" class="rss-meta"></p>

          <div id="weather-result" style="display:none;">
            <div class="weather-row">
              <strong>City:</strong>
              <span id="w-city">—</span>
            </div>
            <div class="weather-row">
              <strong>Temperature:</strong>
              <span id="w-temp">—</span>
            </div>
            <div class="weather-row">
              <strong>Description:</strong>
              <span id="w-desc">—</span>
            </div>
            <div class="weather-row">
              <strong>Icon:</strong>
              <img id="w-icon" alt="Weather icon" />
            </div>
          </div>
        </article>
      </section>
    `,

    contact: `
      <section>
        <h2>Contact Me</h2>
        <article>
          <form>
            <label>Name:</label><br/>
            <input type="text" name="name"/><br/>
            <label>Email:</label><br/>
            <input type="email" name="email"/><br/>
            <label>Message:</label><br/>
            <textarea name="message"></textarea><br/>
            <button type="submit">Send</button>
          </form>
        </article>
      </section>
    `
  };

  // Load page and attach page-specific handlers
  function loadPage(page) {
    // Guard: nonexistent key -> show fallback
    if (!pages[page]) {
      content.innerHTML = `
        <section>
          <h2>Page Not Found</h2>
          <article><p>Sorry, that page doesn’t exist.</p></article>
        </section>`;
      setActive(page);
      $("#content").hide().fadeIn(150);
      return;
    }

    content.innerHTML = pages[page];

    setActive(page);

    // jQuery DOM interaction: quick fade-in for page transitions
    $("#content").hide().fadeIn(150);

    // Wire up per-page logic
    if (page === "rss") attachRssHandlers();
    if (page === "weather") attachWeatherHandlers();
  }

  function setActive(page) {
    buttons.forEach(btn => btn.classList.remove("active"));
    const target = document.querySelector(`button[data-page="${page}"]`);
    if (target) target.classList.add("active");
  }

  // Nav: use vanilla + (bonus) jQuery event as demo
  buttons.forEach(button => {
    button.addEventListener("click", () => loadPage(button.dataset.page));
  });
  $("nav").on("click", "button", function () {
    // jQuery demo: add a tiny ripple-ish effect
    $(this).animate({ opacity: 0.75 }, 80).animate({ opacity: 1 }, 120);
  });

  // ----- RSS FEED INTEGRATION -----
  function attachRssHandlers() {
    const input = document.getElementById("rss-url");
    const btn = document.getElementById("get-rss");
    const status = document.getElementById("rss-status");
    const list = document.getElementById("rss-list");

    // Default sample feed
    input.value ||= "https://feeds.bbci.co.uk/news/technology/rss.xml";

    btn.addEventListener("click", async () => {
      const rssUrl = input.value.trim();
      list.innerHTML = "";
      status.textContent = "Loading feed...";
      try {
        // Using a public RSS->JSON proxy (you can replace with your own backend)
        const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        const resp = await fetch(api);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const data = await resp.json();

        if (!data.items || !data.items.length) {
          status.textContent = "No items found in the feed.";
          return;
        }

        status.textContent = `Showing latest ${Math.min(5, data.items.length)} items.`;
        data.items.slice(0, 5).forEach(item => {
          const li = document.createElement("li");
          li.innerHTML = `
            <a href="${item.link}" target="_blank" rel="noopener">${item.title}</a>
            <div class="rss-meta">${new Date(item.pubDate).toLocaleString()}</div>
          `;
          list.appendChild(li);
        });
      } catch (err) {
        status.textContent = "Failed to load RSS feed. Please check the URL or try again later.";
      }
    });
  }

  // ----- WEATHER (REST API) -----
  function attachWeatherHandlers() {
    const input = document.getElementById("city-input");
    const btn = document.getElementById("get-weather");
    const status = document.getElementById("weather-status");
    const result = document.getElementById("weather-result");

    const cityEl = document.getElementById("w-city");
    const tempEl = document.getElementById("w-temp");
    const descEl = document.getElementById("w-desc");
    const iconEl = document.getElementById("w-icon");

    async function fetchWeather() {
      const city = input.value.trim();
      status.className = "rss-meta";
      status.textContent = "";
      result.style.display = "none";

      if (!city) {
        status.className = "weather-error";
        status.textContent = "Please enter a city name.";
        return;
      }
      if (!OPENWEATHER_KEY || OPENWEATHER_KEY === "YOUR_OPENWEATHER_KEY") {
        status.className = "weather-error";
        status.textContent = "Missing OpenWeather API key. Please add your key in Dana_js.js.";
        return;
      }

      try {
        status.textContent = "Fetching weather...";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_KEY}&units=metric`;
        const resp = await fetch(url);
        if (!resp.ok) {
          if (resp.status === 404) throw new Error("City not found. Please check the spelling.");
          throw new Error(`Network error: ${resp.status}`);
        }
        const data = await resp.json();

        const name = `${data.name}, ${data.sys?.country || ""}`.trim();
        const temp = Math.round(data.main.temp);
        const desc = data.weather?.[0]?.description || "N/A";
        const icon = data.weather?.[0]?.icon || "01d";

        cityEl.textContent = name;
        tempEl.textContent = `${temp} °C`;
        descEl.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
        iconEl.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        iconEl.alt = desc;

        result.style.display = "block";
        status.className = "weather-ok";
        status.textContent = "Success!";
      } catch (err) {
        status.className = "weather-error";
        status.textContent = err.message || "Something went wrong. Please try again.";
      }
    }

    btn.addEventListener("click", fetchWeather);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") fetchWeather();
    });
  }

  // Load home by default
  loadPage("home");
});
