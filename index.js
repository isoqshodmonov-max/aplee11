const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Asosiy sahifa
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>World News</title>
       <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8738248908447957"
     crossorigin="anonymous"></script>
    <style>
        * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Georgia', serif;
    background-color: #f2f2f2;
    color: #333;
    line-height: 1.6;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 20px;
}

h1 {
    font-size: 3em;
    font-weight: bold;
}

.header-info {
    display: flex;
    justify-content: center;
    gap: 15px;
    font-size: 0.9em;
    color: gray;
}

nav {
    background-color: #333;
    padding: 10px 0;
    margin-bottom: 20px;
}

nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.1em;
}

nav ul li a:hover {
    text-decoration: underline;
}

main {
    display: flex;
    gap: 20px;
}

article {
    flex: 3;
    background-color: white;
    padding: 20px;
    border: 1px solid #ddd;
    cursor: pointer;
    transition: .5s;
}
article:hover{
    box-shadow: 0px 4px 22px rgba(172, 172, 172, 0.76);
    transform: translate(0 , -5px);
}

article h2 {
    font-size: 2em;
    margin-bottom: 10px;
}

article p {
    margin-bottom: 15px;
}

article img {
    width: 100%;
    margin-top: 10px;
    border-radius: 5px;
}

.container {
    max-width: 1400px; /* Maksimal kenglik */
    margin: 0 auto;    /* O‘rtaga joylashish */
    padding: 0 20px;   /* Chetlardan ichki bo‘sh joy */
}

    </style>
</head>
<body>
   <div class="container">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8738248908447957"
     crossorigin="anonymous"></script>
<!-- world news -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8738248908447957"
     data-ad-slot="7520362058"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>


    <header>
        <div class="header-container">
            <h1>World News</h1>
            <div class="header-info">
                <span>ISSUE #1</span>
                <span>FRIDAY, 27 09, 2024</span>
                <span>TWO MEMES EDITION</span>
            </div>
        </div>
    </header>

    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#politics">Politics</a></li>
            <li><a href="#business">Business</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#health">Health</a></li>
            <li><a href="#sports">Sports</a></li>
            <li><a href="#entertainment">Entertainment</a></li>
        </ul>
    </nav>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8738248908447957"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fb+5w+4e-db+86"
     data-ad-client="ca-pub-8738248908447957"
     data-ad-slot="2086467314"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

    <main id="main-content">
        <article>
            <h2>Zelenskyy's Visit to the US</h2>
            <p>Ukrainian President Volodymyr Zelenskyy is visiting Washington to secure further US support for Ukraine's defense against Russia. This visit is critical as the US prepares for elections, with opinions divided on continued support.</p>
            <img src="https://newsukraine.rbc.ua/static/img/_/b/_bayden_president_gov_ua_a82ca966d0ea5bcc9c32e32fc090ed9f_1300x820_6d3af7b7eacbdff29dfebe0db6520f45_1200x675.jpg" alt="Zelenskyy's Visit to the US">
        </article>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8738248908447957"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fb+5w+4e-db+86"
     data-ad-client="ca-pub-8738248908447957"
     data-ad-slot="2086467314"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
        <article>
            <h2>Sanctions on Russian Hackers</h2>
            <p>The US has indicted two top Russian hackers and imposed sanctions on Russian money laundering operations linked to cybercrime. These actions are part of a broader effort to curb illegal cryptocurrency exchanges.</p>
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/230526113133-chinese-hackers-us-computer-networks-file.jpg?c=16x9&q=h_833,w_1480,c_fill" alt="Russian Hackers Sanctions">
        </article>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8738248908447957"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fb+5w+4e-db+86"
     data-ad-client="ca-pub-8738248908447957"
     data-ad-slot="2086467314"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
        <article>
            <h2>Presidents Cup: Team USA Dominates</h2>
            <p>Team USA has made a strong start in the Presidents Cup, dominating the International Team in early rounds. Critical matches are scheduled through the weekend as the tournament continues.</p>
            <img src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/v2/Q4BPATE66G5CEHNXUFCQZTCKNA.jpg?auth=36f06a4399653070fcab009a26eb6df812155e72cc7ac93313be8b171c5aee63&height=553&width=830&focal=1746,503&quality=80" alt="Presidents Cup Golf">
        </article>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8738248908447957"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-6t+ed+2i-1n-4w"
     data-ad-client="ca-pub-8738248908447957"
     data-ad-slot="8029059130"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
        
    </main>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8738248908447957"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-6t+ed+2i-1n-4w"
     data-ad-client="ca-pub-8738248908447957"
     data-ad-slot="8029059130"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    <footer>
        <p>&copy; 2024 World News</p>
    </footer>
   </div>
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8738248908447957"
     crossorigin="anonymous"></script>

    <script>
    document.addEventListener('DOMContentLoaded', () => {
        // Load the default home page content on initial load
        loadContent('home');

        // Add event listeners to all menu links
        const menuLinks = document.querySelectorAll('nav ul li a');
        menuLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent the default anchor behavior
                const page = link.getAttribute('href').substring(1); // Get the href attribute without the "#"
                loadContent(page); // Load the corresponding content
            });
        });
    });

    // Function to load the content dynamically based on the page
    function loadContent(page) {
        const mainContent = document.getElementById('main-content');
        let content = '';

        switch (page) {
            case 'home':
                content = \`
                    <article>
                        <h2>Zelenskyy's Visit to the US</h2>
                        <p>Ukrainian President Volodymyr Zelenskyy is visiting Washington to secure further US support for Ukraine's defense against Russia...</p>
                        <img src="https://newsukraine.rbc.ua/static/img/_/b/_bayden_president_gov_ua_a82ca966d0ea5bcc9c32e32fc090ed9f_1300x820_6d3af7b7eacbdff29dfebe0db6520f45_1200x675.jpg" alt="Zelenskyy's Visit to the US">
                    </article>
                    <article>
                        <h2>Sanctions on Russian Hackers</h2>
                        <p>The US has indicted two top Russian hackers and imposed sanctions on Russian money laundering operations linked to cybercrime...</p>
                        <img src="https://media.cnn.com/api/v1/images/stellar/prod/230526113133-chinese-hackers-us-computer-networks-file.jpg" alt="Russian Hackers Sanctions">
                    </article>
                    <article>
                        <h2>Presidents Cup: Team USA Dominates</h2>
                        <p>Team USA has made a strong start in the Presidents Cup...</p>
                        <img src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/v2/Q4BPATE66G5CEHNXUFCQZTCKNA.jpg?auth=36f06a4399653070fcab009a26eb6df812155e72cc7ac93313be8b171c5aee63&height=553&width=830&focal=1746,503&quality=80" alt="Presidents Cup Golf">
                    </article>
                \`;
                break;
            case 'politics':
                content = \`
                    <article>
                        <h2>Global Political Tensions Rise</h2>
                        <p>Political tensions between various nations are increasing as elections approach in the US and several European countries...</p>
                        <img src="https://www.ngssuper.com.au/Files/open-graph/og_articles_geopolitical-tensions.jpg" alt="Global Politics">
                    </article>
                \`;
                break;
            case 'business':
                content = \`
                    <article>
                        <h2>Stock Markets Rally Amid Economic Uncertainty</h2>
                        <p>Despite ongoing economic challenges, stock markets have rallied this week, driven by tech sector growth...</p>
                        <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202001/stock_market_trends_what_causes_stock_prices_to_change_1024x768_660_230120084924.jpg?size=948:533" alt="Stock Markets">
                    </article>
                \`;
                break;
            case 'technology':
                content = \`
                    <article>
                        <h2>AI Revolutionizing the Tech Industry</h2>
                        <p>Artificial Intelligence is transforming the tech industry, with new advancements in machine learning and automation...</p>
                        <img src="https://media.licdn.com/dms/image/D5612AQEr9LkCiHODSA/article-cover_image-shrink_720_1280/0/1710859745989?e=2147483647&v=beta&t=Ia4KP-43mkIxRzieHnpBEMUxhSAHgwV0HHm8yOCjq0Y" alt="AI Revolution">
                    </article>
                \`;
                break;
            case 'health':
                content = \`
                    <article>
                        <h2>Global Health Crisis: What’s Next?</h2>
                        <p>As the world recovers from recent pandemics, health experts are warning of potential future crises...</p>
                        <img src="https://media.licdn.com/dms/image/C5112AQEAfF58Vw8DHg/article-cover_image-shrink_600_2000/0/1584408673176?e=2147483647&v=beta&t=kQKKguzBD460bEoAGrdQY2TlbdRfJQ6rYsPxac1e8Wo" alt="Health Crisis">
                    </article>
                \`;
                break;
            case 'sports':
                content = \`
                    <article>
                        <h2>Olympic Games Preview</h2>
                        <p>The upcoming Olympic Games are expected to be one of the most competitive in recent history...</p>
                        <img src="https://www.4ksummit.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-25-at-09.59.04-1.jpeg" alt="Olympic Games">
                    </article>
                \`;
                break;
            case 'entertainment':
                content = \`
                    <article>
                        <h2>Hollywood's Next Big Blockbuster</h2>
                        <p>As the summer blockbuster season approaches, Hollywood is gearing up for a slate of highly anticipated films...</p>
                        <img src="https://imageio.forbes.com/specials-images/imageserve/5e18a168735f8c00079991a0/Hollywood-Sign/960x0.jpg?format=jpg&width=960" alt="Hollywood Blockbuster">
                    </article>
                \`;
                break;
            default:
                content = '<p>Page not found.</p>';
        }

        // Insert the content into the main content area
        mainContent.innerHTML = content;
    }


   </script>
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8738248908447957"
     crossorigin="anonymous"></script>
</body>
</html>




  `);
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishga tushdi`);
});
