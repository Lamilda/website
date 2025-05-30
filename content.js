// content.js

const timelineContent = {
    items: [
      {
        position: "left",
        icon: '<img src="" alt="" class="company-logo">',
        title: "2011",
        date: "Media planner at Euroreklama",
        description: "My marketing journey began at a small local media agency, where I quickly immersed myself in every stage of the campaign lifecycle. From <b>planning and optimizing media placements</b> to <b>analyzing performance</b> and <b>presenting post-campaign reports</b>, I gained a solid foundation in practical marketing. I <b>worked closely with external partners</b> and <b>supported the account manager in crafting effective media strategies</b>—an experience that gave me a well-rounded and hands-on introduction to the industry.",
        hasModal: false
      },
      {
        position: "right",
        icon: '<img src="img/carat.png" alt="Carat logo" class="company-logo">',
        title: "2015",
        date: "Media planner at Carat",
        description: "My next career move brought me to a larger international media agency, where I applied my growing expertise to <b>support high-profile clients.</b> I focused on <b>implementing media strategies</b> by planning and optimizing campaigns across various platforms to drive strong results. I was also responsible for <b>ensuring campaigns were delivered on time and within budget</b>. Additionally, I <b>contributed to the development of client marketing strategies</b> and <b>supported pitch teams in winning new business.</b>",
        hasModal: false
      },
      {
        position: "left",
        icon: '<img src="img/carat.png" alt="Carat logo" class="company-logo">',
        title: "2016",
        date: "Account manager at Carat",
        description: "My career then progressed into Account Management, where I took ownership of <b>driving client growth</b> and <b>fostering strong partnerships</b> to deliver measurable results. I <b>grew client investments</b> year-over-year by <b>developing robust strategies and leading the execution of impactful multi-channel campaigns. Building trusted relationships with clients</b> across sectors like telecommunications, FMCG, and pharmaceuticals was central to my approach. My deep knowledge of media platforms and processes allowed me to <b>effectively manage and mentor the planning team.</b> I also worked closely with internal and external teams to ensure campaigns were delivered on time, within budget, and aligned with client goals.",
        hasModal: false
      },
      {
        position: "right",
        icon: '<img src="img/EACA.png" alt="Education" class="company-logo">',
        title: "2017",
        date: "European Advertising Certificate, EACA",
        description: "The EAC online learning programme gave me a solid foundation in the advertising and communications industry. Through seven key modules, <b>I gained insights into brand strategy, client relationships, media planning, creativity, and campaign effectiveness.</b> The interactive format, including lessons, quizzes, and group discussions, helped me strengthen my strategic thinking and communication skills for real-world application.",
        hasModal: false
      },
      {
        position: "left",
        icon: '<img src="img/codecademy.jpg" alt="Education" class="company-logo">',
        title: "2020",
        date: "Data Science course on Code Academy",
        description: "After nearly nine dynamic years in the fast-paced world of media agencies, I decided to take a step back and reflect on my long-term career goals. I took a nine-month break during the early stages of the Covid-19 pandemic—a period that offered both challenges and the opportunity to reset. Recognizing the growing importance of <b>data in marketing</b>, I used this time to <b>build my technical skills</b> by completing foundational courses in SQL and Python, laying the groundwork for a more data-driven approach to strategic decision-making.",
        hasModal: false
      },
      {
        position: "right",
        icon: '<img src="img/vinted.png" alt="Vinted logo" class="company-logo">',
        title: "2020",
        date: "Mass media marketing project manager at Vinted",
        description: `
        <p>My next step took me to the client side, where I joined Vinted—a fast-growing tech company on a mission to make second-hand fashion the first choice. As <b>Mass Media Marketing Project Manager</b>, I was responsible for <b>driving growth in the German and Belgian</b> markets through strategic offline communication. I <b>led end-to-end project management, aligning cross-functional stakeholders and ensuring timely, effective campaign execution</b> across regions.</p> 

        <p>Working in a fast-paced, high-growth environment, I managed large-scale budgets and tight deadlines while <b>maintaining a structured, solution-oriented approach. I oversaw external media agencies</b>, providing clear briefs and strategic direction to ensure strong campaign delivery. Data played a key role in my decision-making, and I leveraged <b>econometric models and performance analytics to evaluate campaign effectiveness and uncover actionable insights</b>.</p>

        <p>Notable achievements included tailoring communication strategies for Belgium’s distinct language regions, managing mass media efforts during Vinted’s rebranding in Germany, and leading a cross-functional analysis of user behavior following a major platform update.</p>`,
        hasModal: false
      },
      {
        position: "left",
        icon: '<img src="img/vinted.png" alt="Vinted logo" class="company-logo">',
        title: "2021",
        date: "Focus on new markets. <p>🇨🇦 Canada launch</p>",
        description: "<p>Building on my success in driving growth in existing markets, my role evolved to focus on <b>international expansion</b> — beginning with the <b>launch of Vinted in Canada</b>. This initiative required close <b>collaboration with cross-functional teams</b> across Product, Data, Brand, Production, and Digital to align on clear objectives, timelines, and responsibilities. Entering a new and complex market involved <b>navigating a distinct media landscape, selecting the right media agency partner, and tailoring strategies for a bilingual audience</b>. I played a key role in shaping the business case and balancing mass media investment to build brand awareness while ensuring platform performance.</p> <p>In response to the unique challenges of this launch, I led a side project to develop standardized testing guidelines across markets, with a strong emphasis on data measurability. Working closely with the data team, I collected insights from market managers, documented marketing activities, and created clear communication materials to support consistent and effective testing processes across Vinted’s international teams.</p>",
        hasModal: false
      },  
      {
        position: "right",
        icon: '<img src="img/vinted.png" alt="Vinted logo" class="company-logo">',
        title: "2022",
        date: "🇸🇪 Sweden launch",
        description: "I then shifted my focus to the <b>Nordic markets</b>, where media consumption habits—particularly around TV viewership—differ notably from the rest of Europe. <b>Partnering with cross-functional teams</b> across Product, Data, Brand, Production, and Digital, we <b>developed and executed a market entry strategy</b> tailored to the region’s unique characteristics. As we faced challenges in reaching our targets, I added new media formats to our regular communication and applied a structured testing approach, which ultimately led to strong performance improvements and significant growth in the region.",
        hasModal: true,
        modalId: "sweden2022Modal",
        modalContent: {
          projectOverview: "As part of our efforts to accelerate growth in a challenging market, I led the development and execution of a strategic media diversification initiative. The goal was to identify a high-performing media mix that would increase brand awareness, improve user acquisition, and ultimately deliver stronger ROI and shorter payback periods. This involved introducing new offline channels into a performance-driven environment where digital and TV had traditionally dominated.",
          challenges: ["<p>Introducing new media channels required overcoming several hurdles in a data-focused and performance-driven environment:</p>",
            "- Lower TV viewership compared to other high-performing markets",
            "- Insufficient growth to meet planned ROI targets",
            "- The need to diversify the media mix to extend reach beyond existing channels",
            "- A requirement for robust data and measurable performance to justify new investments"
          ],
          approach: "Working closely with cross-functional teams across Brand, Production, Digital, and Data, we aligned on budget priorities and developed a detailed media plan. This included rigorous testing frameworks to validate new channels, with clear hypotheses, performance metrics, and risk assessments. Once approved, I briefed our media agency, adapted plans to vendor availabilities, and ensured seamless execution in collaboration with internal teams. I also oversaw stakeholder alignment and managed the delivery of creative assets while maintaining a focus on performance tracking and data integrity.",
          results: [
            "The Out-of-Home campaign led to a 30% increase in brand awareness and consideration among the target audience. While short-term product metrics showed limited impact, the campaign contributed to sustained long-term growth, with noticeable improvements across all product KPIs in the months that followed."
          ],
          campaignImages: [
            {
              src: "img/sweden/1.jpeg",
              alt: "Swedish campaign visual 1",
              caption: "Primary campaign visual showcasing the platform's ease of use"
            },
            {
              src: "img/sweden/2.jpeg",
              alt: "Swedish campaign visual 2",
              caption: "Digital campaign creative highlighting the community aspect"
            },
            {
              src: "img/sweden/3.jpeg",
              alt: "Swedish campaign visual 3",
              caption: "Out-of-home advertising in Stockholm city center"
            },
            {
              src: "img/sweden/4.jpeg",
              alt: "Swedish campaign visual 4",
              caption: "TV campaign featuring local influencers"
            },
            {
              src: "img/sweden/5.jpeg",
              alt: "Swedish campaign visual 5",
              caption: "Social media campaign visual emphasizing sustainability"
            }
          ]
        }
      },
      {
        position: "left",
        icon: '<img src="img/vinted.png" alt="Vinted logo" class="company-logo">',
        title: "2023",
        date: "🇩🇰 Denmark and 🇫🇮 Finland launch",
        description: "Following the success in Sweden, we <b>expanded into Denmark and Finland</b> using a similarly collaborative and tailored approach. I <b>worked closely with cross-functional teams</b> to assess market-specific opportunities and <b>adjust our strategies to align with each country’s unique media landscape</b>. Operating in Vinted’s <b>fast-paced environment required agility</b> and a strong <b>focus on results</b> — I regularly <b>tracked campaign performance, delivered actionable reporting, and quickly refined our tactics to meet key objectives</b>. As I wrapped up my time at Vinted, I was proud to leave these markets on a solid trajectory of continued growth.",
        hasModal: true,
        modalId: "denmark2023Modal",
        modalContent: {
          projectOverview: "Following our success in Sweden, we applied a similar approach to a new market where Vinted had no established media presence. The objective was to build brand awareness and drive user acquisition through a more diversified media mix, while staying aligned with the company’s performance-driven expectations and ensuring a strong ROI with reduced payback periods.",
          challenges: [
            "<p>Securing approval for new media channels in a highly data-focused environment posed familiar obstacles, including:</p>",
            "- Even lower TV viewership than in other high-performing markets",
            "- Limited brand recognition, requiring alternative formats to boost awareness and reach",
            "- The need to prove measurable performance for all media investments"
          ],
          approach: "Working in close partnership with Brand, Production, Digital, and Data teams, we aligned on budget priorities and built a detailed media plan tailored to the market’s unique characteristics. I led the development of a structured testing framework to assess new channels based on coverage, CPM efficiency, and cross-media synergies, while forecasting their impact on product metrics and payback periods. After securing approval, I collaborated with our media agency and external partners to select optimal OOH formats and placements. I adapted plans in response to media vendor availability and coordinated closely with internal teams to ensure creative delivery, data integrity, and smooth execution. Throughout the campaign, I monitored performance closely and led a comprehensive post-campaign analysis, combining internal data with brand research insights.",
          results: [
            "The campaign drove a 40% increase in brand awareness and consideration among the target audience. It also helped sustain a strong user acquisition trajectory, validating the strategic shift toward a more diversified and locally relevant media mix."
          ],
          campaignImages: [
            {
              src: "img/denmark/denmark1.jpg",
              alt: "Denmark campaign visual 1",
              caption: "Main campaign visual highlighting the platform's core message"
            },
            {
              src: "img/denmark/denmark2.jpg",
              alt: "Denmark campaign visual 2",
              caption: "Street-level advertising in Copenhagen's busy shopping district"
            },
            {
              src: "img/denmark/denmark3.JPG",
              alt: "Denmark campaign visual 3",
              caption: "Digital billboard placement in central Copenhagen"
            },
            {
              src: "img/denmark/denmark4.jpg",
              alt: "Denmark campaign visual 4",
              caption: "Public transport advertising showcasing the app interface"
            },
            {
              src: "img/denmark/denmark5.jpg",
              alt: "Denmark campaign visual 5",
              caption: "Sustainability-focused campaign creative"
            },
            {
              src: "img/denmark/denmark6.jpg",
              alt: "Denmark campaign visual 6",
              caption: "Local influencer collaboration visual"
            },
            {
              src: "img/denmark/denmark7.jpg",
              alt: "Denmark campaign visual 7",
              caption: "Large-format outdoor advertising in urban area"
            },
            {
              src: "img/denmark/denmark8.jpg",
              alt: "Denmark campaign visual 8",
              caption: "Metro station campaign presence"
            },
            {
              src: "img/denmark/denmark9.jpg",
              alt: "Denmark campaign visual 9",
              caption: "Shopping center digital display campaign"
            },
            {
              src: "img/denmark/denmark10.jpg",
              alt: "Denmark campaign visual 10",
              caption: "Community-focused campaign message"
            },
            {
              src: "img/denmark/denmark11.JPG",
              alt: "Denmark campaign visual 11",
              caption: "Premium location outdoor advertising"
            },
            {
              src: "img/denmark/denmark12.jpg",
              alt: "Denmark campaign visual 12",
              caption: "Social media campaign creative"
            }
          ]
        }
      },
      {
        position: "right",
        icon: '<img src="img/dk.png" alt="" class="company-logo">',
        title: "2023",
        date: "Moved to Copenhagen and worked remotely",
        description: "",
        hasModal: false
      }, 
      
      {
        position: "left",
        icon: '<img src="img/TechBBQ.png" alt="Techbbq logo" class="company-logo">',
        title: "2025 April",
        date: "TechBBQ. Marketing and Sales Assistant (internship)",
        description: "<p>I’m currently volunteering as a <b>Marketing and Sales Assistant at TechBBQ</b> - Scandinavia's largest startup and innovation summit - while exploring my next career opportunity. In this role, I’m actively <b>contributing to the empowerment of startups and innovation in Scandinavia. I focus on customer service and direct ticket sales</b>, gaining hands-on experience in a fast-paced, dynamic environment.</p> <p>My responsibilities include <b>managing attendee inquiries via email, assisting with sales outreach, and supporting event logistics</b>. I collaborate with the marketing and sales teams to implement communication strategies and gather feedback to improve future events. This volunteer position has been a great way to stay engaged and continue developing my marketing and sales skills while I search for my next professional challenge.</p>",
        hasModal: false
      }
    ]
    
  }; 