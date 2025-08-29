// src/App.jsx
import "./App.css";

function App() {
  return (
    <div className="main">
      {/* Header */}
      <div className="h">
        <nav>
          <img className="logo" src="/img/logo.svg" alt="logo" width="160px" />
        </nav>
        <span>
          <button id="a">English</button>
          <button id="b">Sign In</button>
        </span>
      </div>

      <div className="box"></div>

      {/* Hero Section */}
      <div className="hero">
        <span>Unlimited movies, TV shows and more</span>
        <span>Starts at ₹149. Cancel at any time.</span>
        <span>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div>
          <input
            type="text"
            placeholder="Email address"
            name="Email"
            id="mailid"
          />
          <button>Get Started &gt;</button>
        </div>
      </div>

      {/* Trending Section */}
      <div className="scd">
        <div className="sub">
          <h1>Trending Now</h1>
          <span>
            <button>India</button>
            <button>Movies</button>
          </span>
        </div>
        <div className="series">
          <div className="card card1"></div>
          <div className="card card2"></div>
          <div className="card card3"></div>
          <div className="card card4"></div>
          <div className="card card5"></div>
        </div>

        {/* Features */}
        <div className="features">
          <div className="row">
            <div className="text-col">
              <h2>Enjoy on your TV</h2>
              <p>
                Watch on smart TVs, PlayStations, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>
            <div className="img-col">
              <img src="/img/feature-1.png" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="img-col">
              <img src="/img/feature-2.png" alt="" />
            </div>
            <div className="text-col">
              <h2>Download your shows to watch offline.</h2>
              <p>
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="text-col">
              <h2>Watch everywhere.</h2>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop and TV.
              </p>
            </div>
            <div className="img-col">
              <img src="/img/feature-3.png" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="img-col">
              <img src="/img/feature-4.png" alt="" />
            </div>
            <div className="text-col">
              <h2>Create profiles for children.</h2>
              <p>
                Send children on adventure with their favorite character in a
                space made just for them — free with your membership.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul className="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label htmlFor="first">What is Netflix?</label>
            <div className="content">
              <p>
               Netflix is a subscription-based streaming service that offers unlimited access to movies, TV shows, documentaries, and exclusive originals across various genres and languages, available to watch anytime on smartphones, laptops, smart TVs, and tablets, with features like offline downloads, multiple profiles, and personalized recommendations.
              </p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="second" />
            <label htmlFor="second">How much does Netflix cost?</label>
            <div className="content">
              <p>Netflix offers different subscription plans depending on the country. In India, for example, plans start at ₹149/month for mobile-only streaming, and higher tiers (₹199, ₹499, ₹649 per month) allow streaming on more devices with better video quality like HD and Ultra HD.</p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="third" />
            <label htmlFor="third">Where can I watch?</label>
            <div className="content">
              <p>You can watch Netflix anywhere with an internet connection on devices like smartphones, tablets, laptops, smart TVs, and streaming devices such as Chromecast, Fire TV Stick, Apple TV, PlayStation, and Xbox, and you can also download shows on mobile devices to watch offline.</p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="forth" />
            <label htmlFor="forth">What can I watch on Netflix?</label>
            <div className="content">
              <p>On Netflix, you can watch a wide range of content including movies, TV shows, documentaries, stand-up comedy specials, anime, and exclusive Netflix Originals across various genres and languages, ensuring there’s something entertaining for every taste and age group.</p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="fifth" />
            <label htmlFor="fifth">How do I cancel?</label>
            <div className="content">
              <p>You can cancel your Netflix subscription anytime by going to Account Settings on the Netflix website or app and selecting “Cancel Membership” — there are no cancellation fees, and you can continue watching until the end of your current billing period.</p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="sixth" />
            <label htmlFor="sixth">What can I watch on Netflix?</label>
            <div className="content">
              <p>You can watch thousands of movies, TV shows, documentaries, anime, and exclusive Netflix Originals across different genres and languages, ranging from dramas, comedies, and thrillers to kids’ content and family entertainment.</p>
            </div>
          </li>
        </ul>
        <small>
          Ready to watch? Enter your email to create or restart your membership.
        </small>
        <form className="email-signup">
          <input type="email" placeholder="Email address" required />
          <button type="submit">Get Started</button>
        </form>
      </div>

      {/* Footer */}
      <div className="footer">
        <h2>Question? Call 001-326-569</h2>
        <div className="row">
          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>
          <div className="col">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookies Preferences</a>
            <a href="#">Legal Notices</a>
          </div>
          <div className="col">
            <a href="#">Accounts</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </div>
          <div className="col">
            <a href="#">Media Centre</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <button id="a">English</button>
        <p className="copyright-txt">&copy; Netflix India</p>
      </div>
    </div>
  );
}

export default App;
