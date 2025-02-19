function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("show");
}

document.addEventListener('click', function(event) {
    var menu = document.getElementById("sidebar");
    var icon = document.querySelector(".menu-icon");

    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        menu.classList.remove("show");
    }
});

const buttons = document.querySelectorAll('nav ul li a');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

function openNews(newsId) {
    var newsContent = {
        "news1": {
            title: "Global Tech Innovations in 2025",
            content: "Discover the most exciting technological breakthroughs expected in 2025. From AI advancements to new gadgets, the future is here."
        },
        "news2": {
            title: "Climate Change: The Urgent Battle",
            content: "As global temperatures rise, scientists are sounding alarms about the consequences of climate change. Learn about what can be done."
        },
        "news3": {
            title: "Sports: The Rise of Women’s Soccer",
            content: "The women's soccer league is gaining global recognition. Here’s why 2025 could be the biggest year for the sport."
        },
        "news4": {
            title: "Innovative Architecture Around the World",
            content: "Explore the latest trends in architecture, including sustainable buildings and futuristic designs."
        },
        "news5": {
            title: "Advancements in Space Exploration",
            content: "NASA, SpaceX, and other agencies are pushing the limits of space exploration. Here’s what’s on the horizon for humanity."
        },
        "news6": {
            title: "The Future of Electric Vehicles",
            content: "Electric cars are revolutionizing the auto industry. What’s next for the future of transportation?"
        },
        "news7": {
            title: "Fashion Trends for 2025",
            content: "From high-end couture to streetwear, here’s what’s trending in fashion for the upcoming year."
        },
        "news8": {
            title: "Artificial Intelligence and Ethics",
            content: "As AI continues to evolve, ethical concerns are growing. Let’s take a look at how society is addressing these challenges."
        },
        "news9": {
            title: "The Digital Transformation of Education",
            content: "The pandemic changed the way we learn, but how will technology shape the future of education? Here’s a glimpse into tomorrow’s classrooms."
        }
    };

    var news = newsContent[newsId];

    var newsSection = document.createElement('section');
    newsSection.classList.add('news-detail');
    newsSection.innerHTML = `<h2>${news.title}</h2><p>${news.content}</p>`;
    document.body.appendChild(newsSection);
}

function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

document.getElementById("register-btn").addEventListener("click", function() {
    openPopup('register-popup');
});

document.getElementById("signin-btn").addEventListener("click", function() {
    openPopup('signin-popup');
});

document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});
