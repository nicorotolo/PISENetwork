<!-- Enhanced Interactive Landing Page for PISE Network -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PISE Network - Learning, Growing, and Succeeding Together</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="/assets/css/main.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f0f0f0;
            color: #333;
            margin: 0;
            padding: 0;
        }

        .hero {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/hero_image.jpg') no-repeat center center/cover;
            height: 90vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
        }

        .hero h1 {
            font-size: 4em;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 1.7em;
            margin-bottom: 40px;
        }

        .hero .cta {
            background-color: #ff9800;
            padding: 15px 30px;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s, transform 0.3s;
        }

        .hero .cta:hover {
            background-color: #e3c8c1;
            transform: scale(1.05);
        }

        .slideshow {
            position: relative;
            width: 100%;
            max-width: 1200px;
            margin: 40px auto;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .slideshow img {
            width: 100%;
            display: none;
        }

        .slideshow img.active {
            display: block;
        }

        .countdown-container {
            text-align: center;
            padding: 40px 20px;
            background-color: #fff;
        }

        .countdown-container h2 {
            font-size: 2.5em;
            margin-bottom: 20px;
        }

        .countdown {
            font-size: 2em;
            color: #9b1c31;
        }

        .features {
            display: flex;
            justify-content: space-around;
            padding: 60px 20px;
            background-color: #fff;
        }

        .feature {
            max-width: 30%;
            text-align: center;
        }

        .feature i {
            font-size: 3.5em;
            color: #ff9800;
            margin-bottom: 20px;
        }

        .feature h3 {
            font-size: 1.8em;
            margin-bottom: 15px;
        }

        .feature p {
            font-size: 1.1em;
            line-height: 1.6;
        }

        .events-container {
            padding: 60px 20px;
            text-align: center;
            background-color: #f9f9f9;
        }

        .events-container h2 {
            margin-bottom: 40px;
            font-size: 2.5em;
        }

        .events {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .event-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: calc(33% - 40px);
            text-align: left;
            transition: transform 0.3s;
        }

        .event-card:hover {
            transform: translateY(-10px);
        }

        .event-card h3 {
            margin-top: 0;
            font-size: 1.5em;
            color: #9b1c31;
        }

        .event-card p {
            margin-bottom: 10px;
            font-size: 1em;
        }

        .event-card a {
            display: inline-block;
            background-color: #9b1c31;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s;
        }

        .event-card a:hover {
            background-color: #e3c8c1;
        }

        .cta-section {
            background-color: #9b1c31;
            color: white;
            padding: 60px 20px;
            text-align: center;
        }

        .cta-section h2 {
            font-size: 2.5em;
            margin-bottom: 20px;
        }

        .cta-section a {
            background-color: #ff9800;
            color: #fff;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: transform 0.2s, background-color 0.3s;
        }

        .cta-section a:hover {
            transform: scale(1.1);
            background-color: #e3c8c1;
        }

        .testimonials {
            padding: 60px 20px;
            background-color: #f0f0f0;
        }

        .testimonials h2 {
            text-align: center;
            margin-bottom: 40px;
            font-size: 2.5em;
        }

        .testimonial {
            max-width: 800px;
            margin: 0 auto 40px;
            text-align: center;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .testimonial p {
            font-style: italic;
            font-size: 1.2em;
        }

        .testimonial h4 {
            margin-top: 10px;
            color: #9b1c31;
            font-size: 1.1em;
        }
    </style>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            // Slideshow functionality
            let slideIndex = 0;
            const slides = document.querySelectorAll(".slideshow img");
            function showSlides() {
                slides.forEach((slide, index) => {
                    slide.style.display = index === slideIndex ? "block" : "none";
                });
                slideIndex = (slideIndex + 1) % slides.length;
                setTimeout(showSlides, 3000);
            }
            if (slides.length) showSlides();

            // Countdown Timer functionality
            const countdownElement = document.querySelector(".countdown");
            const eventDate = new Date("February 6, 2025 17:00:00").getTime();
            function updateCountdown() {
                const now = new Date().getTime();
                const distance = eventDate - now;
                if (distance < 0) {
                    countdownElement.innerHTML = "Event has started!";
                    return;
                }
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
            if (countdownElement) setInterval(updateCountdown, 1000);

            // Popup Newsletter Signup
            setTimeout(function () {
                alert("Join our newsletter for the latest updates and events!");
            }, 5000);
        });
    </script>
</head>

<body>
    <div class="hero">
        <h1>Welcome to the PISE Network</h1>
        <p>Connecting and Empowering Students and Graduates of Philosophy, International Studies, and Economics</p>
        <a class="cta" href="/collaborate">Get Involved</a>
    </div>

    <div class="slideshow">
        <img src="/assets/images/slide1.jpg" alt="Slide 1" class="active">
        <img src="/assets/images/slide2.jpg" alt="Slide 2">
        <img src="/assets/images/slide3.jpg" alt="Slide 3">
    </div>

    <div class="countdown-container">
        <h2>Next Event Countdown</h2>
        <div class="countdown"></div>
    </div>

    <div class="features">
        <div class="feature">
            <i class="fas fa-graduation-cap"></i>
            <h3>Student Resources</h3>
            <p>Access guides, documents, and resources tailored for Philosophy, International Studies, and Economics students.</p>
        </div>
        <div class="feature">
            <i class="fas fa-handshake"></i>
            <h3>Networking Opportunities</h3>
            <p>Join workshops, webinars, and events to build valuable connections with peers and professionals.</p>
        </div>
        <div class="feature">
            <i class="fas fa-newspaper"></i>
            <h3>Student Editorial</h3>
            <p>Read thought-provoking articles by fellow students and alumni on key topics and issues.</p>
        </div>
    </div>

    <div class="events-container">
        <h2>Upcoming Events</h2>
        <div class="events">
            <div class="event-card">
                <h3>How to Write Your CV</h3>
                <p><strong>Date:</strong> November 7, 2024</p>
                <p><strong>Time:</strong> 17:00 - 17:45</p>
                <p>Learn how to build a CV that catches the attention of recruiters.</p>
                <a href="https://meet.google.com/kvw-udxm-wib" target="_blank">Join Google Meet</a>
            </div>
            <div class="event-card">
                <h3>How to Set Up Your LinkedIn Profile</h3>
                <p><strong>Date:</strong> December 12, 2024</p>
                <p><strong>Time:</strong> 17:00 - 17:45</p>
                <p>Showcase your skills and experience to boost your career prospects.</p>
                <a href="https://meet.google.com/kvw-udxm-wib" target="_blank">Join Google Meet</a>
            </div>
            <div class="event-card">
                <h3>Erasmus Tips and Tricks</h3>
                <p><strong>Date:</strong> February 6, 2025</p>
                <p><strong>Time:</strong> 17:00 - 17:45</p>
                <p>Prepare for Erasmus with insights on adapting to a new culture and studying abroad.</p>
                <a href="https://meet.google.com/kvw-udxm-wib" target="_blank">Join Google Meet</a>
            </div>
        </div>
    </div>

    <div class="cta-section">
        <h2>Join the PISE Network Today!</h2>
        <p>Become a member of our vibrant community and make an impact.</p>
        <a href="/join">Sign Up Now</a>
    </div>

    <div class="testimonials">
        <h2>What Our Members Say</h2>
        <div class="testimonial">
            <p>"The PISE Network has been instrumental in helping me transition into the job market with confidence. The events and resources are invaluable!"</p>
            <h4>- Martina Russo, PISE Alumna</h4>
        </div>
        <div class="testimonial">
            <p>"It's great to connect with people who share similar educational backgrounds and career aspirations. Highly recommend joining the network!"</p>
            <h4>- Luca Bianchi, PISE Graduate</h4>
        </div>
    </div>

    <iframe src="https://www.google.com/maps/d/embed?mid=YOUR_GOOGLE_MAP_ID_HERE" width="100%" height="480"></iframe>
</body>

</html>
