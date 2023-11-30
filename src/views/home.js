import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Infantile Caring Flamingo</title>
        <meta property="og:title" content="Infantile Caring Flamingo" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <span className="home-logo">COACHING</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <a href="#home">Home</a>
              <a href="#details" className="home-nav2">
                About
              </a>
              <a href="#FAQ" className="home-nav4">
                <span>FAQ&apos;s</span>
                <br></br>
              </a>
              <span className="home-nav5">Contact</span>
            </nav>
            <div className="home-buttons"></div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="home-logo1">COACHING</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <Link to="/" className="home-navlink">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <nav className="home-links1">
                <a href="#home" className="home-nav11">
                  Home
                </a>
                <a href="#details" className="home-nav21">
                  About
                </a>
                <a href="#FAQ" className="home-nav41">
                  FAQ&apos;s
                </a>
                <span className="home-nav51">Contact</span>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div id="home" className="home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              Unlock Your Potential
            </h1>
            <video
              src
              loop
              muted
              poster="https://images.unsplash.com/photo-1700583208354-2abccadccada?ixid=M3w5MTMyMXwwfDF8YWxsfDd8fHx8fHwyfHwxNzAxMjkxOTEzfA&amp;ixlib=rb-4.0.3&amp;w=900"
              preload="auto"
              autoPlay
              playsInline
              className="home-video"
            ></video>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div id="details" className="home-details1">
          <div className="home-container02">
            <span className="home-text02 sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              About Our Coaching Agency
            </h2>
            <span className="home-details-sub-heading">
              Our coaching agency is dedicated to helping individuals and teams
              reach their full potential. With our experienced coaches and
              personalized approach, we provide the guidance and support needed
              to achieve success. Whether you&apos;re looking to improve your
              leadership skills, enhance your career prospects, or overcome
              personal challenges, we have the expertise to help you thrive.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODUxNHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container03">
              <span className="home-text05 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Powerful Features for Your Coaching Agency
              </h2>
              <span className="home-features-sub-heading">
                Discover how our professional website can help you grow your
                coaching business.
              </span>
            </div>
            <div className="home-container04">
              <FeatureCard
                Heading="Customizable Website Design"
                SubHeading="Create a unique and professional website design that reflects your coaching agency's brand."
              ></FeatureCard>
              <FeatureCard
                Heading="Responsive and Mobile-Friendly"
                SubHeading="Ensure your website looks great on all devices, from desktops to smartphones."
              ></FeatureCard>
              <FeatureCard
                Heading="Easy Content Management"
                SubHeading="Effortlessly update and manage your website content with our user-friendly CMS."
              ></FeatureCard>
              <FeatureCard
                Heading="Integrated Booking System"
                SubHeading="Allow clients to easily book coaching sessions directly through your website."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-pricing1">
          <div className="home-container05">
            <span className="home-text08 sectionTitle">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="home-pricing-heading heading2">
              Some title for a pricing section
            </h2>
            <span className="home-pricing-sub-heading">
              Some catchy text for a pricing section
            </span>
          </div>
          <div className="home-container06">
            <div className="home-pricing-card">
              <div className="home-container07">
                <span className="home-text11 heading3">Free</span>
                <span className="home-free-plan-description">
                  A short description for the free plan
                </span>
              </div>
              <div className="home-container08">
                <span className="home-text12">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container09">
                <div className="home-container10">
                  <span className="home-text15">✔</span>
                  <span className="home-free-plan-features">
                    A feature of the free plan
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text16">✔</span>
                  <span className="home-free-plan-features1">
                    A feature of the free plan
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-text17">✔</span>
                  <span className="home-free-plan-features2">
                    A feature of the free plan
                  </span>
                </div>
                <div className="home-container13">
                  <span className="home-text18">✔</span>
                  <span className="home-free-plan-features3">
                    A feature of the free plan
                  </span>
                </div>
              </div>
              <button className="home-button button">Continue with Free</button>
            </div>
            <div className="home-pricing-card1">
              <div className="home-container14">
                <span className="home-text19 heading3">BASIC</span>
                <span className="home-basic-plan-description">
                  A short description for the basic plan
                </span>
              </div>
              <div className="home-container15">
                <span className="home-text20">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">7</span>
                <span className="home-text23">/ month</span>
              </div>
              <div className="home-container16">
                <div className="home-container17">
                  <span className="home-text24">✔</span>
                  <span className="home-text25">All features of FREE plan</span>
                </div>
                <div className="home-container18">
                  <span className="home-text26">✔</span>
                  <span className="home-basic-plan-features">
                    A feature of the basic plan
                  </span>
                </div>
                <div className="home-container19">
                  <span className="home-text27">✔</span>
                  <span className="home-basic-plan-features1">
                    A feature of the basic plan
                  </span>
                </div>
                <div className="home-container20">
                  <span className="home-text28">✔</span>
                  <span className="home-basic-plan-features2">
                    A feature of the basic plan
                  </span>
                </div>
                <div className="home-container21">
                  <span className="home-text29">✔</span>
                  <span className="home-basic-plan-features3">
                    A feature of the basic plan
                  </span>
                </div>
              </div>
              <button className="home-button1 button">
                Try the Basic plan
              </button>
            </div>
            <div className="home-pricing-card2">
              <div className="home-container22">
                <span className="home-text30 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="home-pro-plan-description">
                  A short description for the pro plan
                </span>
              </div>
              <div className="home-container23">
                <span className="home-text33">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">20</span>
                <span className="home-text36">/ month</span>
              </div>
              <div className="home-container24">
                <div className="home-container25">
                  <span className="home-text37">✔</span>
                  <span className="home-text38">
                     All features of BASIC plan
                  </span>
                </div>
                <div className="home-container26">
                  <span className="home-text39">✔</span>
                  <span className="home-pro-plan-features">
                    A feature of the pro plan
                  </span>
                </div>
                <div className="home-container27">
                  <span className="home-text40">✔</span>
                  <span className="home-pro-plan-features1">
                    A feature of the pro plan
                  </span>
                </div>
                <div className="home-container28">
                  <span className="home-text41">✔</span>
                  <span className="home-pro-plan-features2">
                    A feature of the pro plan
                  </span>
                </div>
              </div>
              <button className="home-button2 button">Try the PRO plan</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">
            Our Coaching Agency in Action
          </h1>
          <span className="home-gallery-sub-heading">
            See our coaching agency in action through these images
          </span>
          <div className="home-container29">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODUxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODUxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1502101872923-d48509bff386?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODUxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1531913223931-b0d3198229ee?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODUxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODUxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1563432065121-35b49977c4fc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODUxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODUxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODUxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1590650046871-92c887180603?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODUxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODUxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1590649681928-4b179f773bd5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODUxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTI4ODUxMnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">Transform Your Life</h1>
          <span className="home-banner-sub-heading">
            Discover the power of professional coaching
          </span>
          <button className="home-banner-button button">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div id="FAQ" className="home-faq1">
            <div className="home-container30">
              <span className="home-text42 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text45 heading2">Common questions</h2>
              <span className="home-text46">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container31">
              <Question
                Answer="We offer a range of services including one-on-one coaching, group coaching, and workshops."
                Question="What services does your coaching agency offer?"
              ></Question>
              <Question
                Answer="The cost of our services varies depending on the specific needs and requirements of each client. Please contact us for a personalized quote."
                Question="How much does it cost to hire your coaching agency?"
              ></Question>
              <Question
                Answer="Yes, we offer various discounts and packages for clients who sign up for multiple sessions or refer others to our agency. Please reach out to us for more information."
                Question="Do you offer any discounts or packages?"
              ></Question>
              <Question
                Answer="Our coaching sessions typically last for one hour. However, the duration can be adjusted based on the client's preferences and needs."
                Question="How long are the coaching sessions?"
              ></Question>
              <Question
                Answer="All our coaches are highly qualified professionals with extensive experience in their respective fields. They hold relevant certifications and undergo continuous training to ensure the highest quality of coaching."
                Question="What qualifications do your coaches have?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container32">
            <span className="home-logo2">COACHING</span>
            <nav className="home-nav1 home-nav1">
              <a href="#home" className="home-nav12">
                Home
              </a>
              <a href="#details" className="home-nav22">
                About
              </a>
              <a href="#FAQ" className="home-nav42">
                FAQs
              </a>
              <span className="home-nav52">Contact</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container33">
            <span className="home-text63">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
