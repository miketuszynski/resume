if (Experience.find().count() === 0)
{
    Experience.insert({
        companyName: 'Flashtalking, Inc',
        companyLocation: 'San Francisco, CA',
        employmentDateRange: 'January 2012 - October 2013',
        title: 'US Director of Technology',
        employmentBullets: [
            { bullet: 'Led combined team of creative developers, technical implementation engineers, and web services developers' },
            { bullet: 'Planned, developed and implemented Atlassian JIRA on-demand SaaS for workflow and case management across both US and UK offices.' },
            { bullet: 'Responsible for advanced technical campaign executions.' },
            { bullet: 'Led certification efforts for Flashtalking\'s entrance into the Network Advertising Initiative.' },
            { bullet: 'Prioritize and solve campaign implementation issues.'},
            { bullet: 'Implemented version control (Git) for UK development team.'},
            { bullet: 'Served as a subject matter expert in all aspects of ad serving environment.' },
            { bullet: 'Coordinated / supported all IT initiatives in San Francisco office.'}
        ]
    });

    Experience.insert({
        companyName: 'Tubemogul, Inc',
        companyLocation: 'Emeryville, CA',
        employmentDateRange: 'April 2011 - December 2011',
        title: 'Director Ad Development',
        employmentBullets: [
            { bullet: 'Lead small group of highly motivated developers on various aspects of ad unit development and UI design.'},
            { bullet: 'Refactored Mobile Video Ad Units using open video platform.'},
            { bullet: 'Redesigned & Refactored Core Video Ad Unit Product.'},
            { bullet: 'Refactored and launched company’s VPAID compliant Interactive Preroll unit.'},
            { bullet: 'Launched company’s first expandable video ad unit.'},
            { bullet: 'Designed and managed company’s first ad unit test framework using Selenium / PyUnit.'}
        ]
    });

    Experience.insert({
        companyName: 'Pointroll, Inc',
        companyLocation: 'Conshohocken, PA',
        employmentDateRange: 'June 2006 - March 2011',
        title: 'Director, Technical Services',
        employmentBullets: [
            { bullet: 'Developed and operated development teams to support an industry-leading rich media ad server and platform. Manage cross-functional teams on a daily basis.'},
            { bullet: 'Managed team of Web Services Developers supporting custom functionality for rich media executions and manage staff in daily operation of client-side issue resolution and back-end web services.'},
            { bullet: 'Led operational groups including production engineers, creative designers, product managers, account managers, and executive management on technical/development practices and procedures.'},
            { bullet: 'Mentored developers in best practices for client and server-side development.'},
            { bullet: 'Served as a communication liaison between business/operational needs and technological solutions.'},
            { bullet: 'Designed and implemented HTML/CSS/JavaScript training for internal staff members.'},
            { bullet: 'Interact with clients and publishers, quickly resolving rich media serving issues.'},
            { bullet: 'Served as a subject matter expert in all aspects of ad serving environment.'}
        ]
    });

    Experience.insert({
        companyName: 'Gartmore Global Investments',
        companyLocation: 'Conshohocken, PA',
        employmentDateRange: 'April 2004 - May 2006',
        title: 'Web Developer / Production Developer',
        employmentBullets: [
            { bullet: 'Developed and managed eight production web sites and managed incoming data feeds for GGI\'s financial platform.'},
            { bullet: 'Redesigned content management system for external web sites of company.'},
            { bullet: 'Successfully developed and maintained data feed automation software package for incoming financial data feeds.'}
        ]
    });

    Experience.insert({
        companyName: 'Towers Perrin',
        companyLocation: 'Philadelphia, PA',
        employmentDateRange: 'June 2001 - March 2004',
        title: 'Systems Monitoring Project Lead',
        employmentBullets: [
            { bullet: 'Developed and Managed production monitoring for hundreds of benefits enrollment web sites.'},
            { bullet: 'Successfully implemented infrastructure and network monitoring for Windows and UNIX based servers in enterprise production environment.'},
            { bullet: 'Successfully implemented test suite for web based application level monitoring on production web applications'}
        ]
    });

}

if (UserProfile.find().count() === 0)
{
    UserProfile.insert({
        firstName: 'Mike',
        lastName: 'Tuszynski',
        thumbnail: 'img/avatar.png',
        tagLine: [
            { icon: 'icon-code', title: 'Technical Guru' },
            { icon: 'icon-code-fork', title: 'Leader' },
            { icon: 'icon-compass', title: 'Manager' }
        ],
        postalStreetAddress: [
            {icon: 'icon-home', title: '1455 Jefferson St'}
        ],
        postalLocation: [
            {icon: 'icon-map-marker', title: 'San Francisco, CA 94123'}
        ],
        contactPhone: [
            {icon: 'icon-mobile-phone', title: '(415) 508-8957'}
        ],
        website: 'www.miketuszynski.info',
        email: [
            {icon: 'icon-envelope', title:'mike@miketuszynski.info'}
        ],
        social: [
            {network: 'linkedin', url: 'http://lnkd.in/v3Qbhn', icon: 'icon-linkedin'},
            {network: 'twitter', url: 'https://twitter.com/tuzman', icon: 'icon-twitter'},
            {network: 'facebook', url: 'https://www.facebook.com/tuzman', icon: 'icon-facebook'},
            {network: 'google-plus', url: 'https://plus.google.com/u/0/118154214685688201078/', icon: 'icon-google-plus'},
            {network: 'github', url: 'https://github.com/miketuszynski', icon: 'icon-github'}
        ],
        executiveSummary: [
            {paragraph: 'I am a sophisticated and skilled strategic lead technologist with far-reaching experience in consolidating workflow and automation through software development. I possess a rare combination of technology expertise and excellent problem solving skills. This skillset along with my relentless work ethic provides me with a strong foundation to pursue my passion for innovative solutions.'},
            {paragraph: 'My recent career experience has been spent at various advertising technology organizations where I have been involved in building solutions that automate workflow and gain efficiencies in various departments. I have led and continue to lead technology professionals in a variety of ways, such as technical thought-leadership, code review and QA, and process overview and enhancement.'},
            {paragraph: 'Since the majority of my career has been working within the advertising vertical I possess deep knowledge and understanding of its technical landscape. My work history and experience allows me to straddle both the technology and business worlds in the development of cutting edge solutions.'}
        ],
        profileOptions: [
            {
                icon: 'icon-print',
                enable: true,
                title: 'Print',
                location: '#'
            },
            {
                icon: 'icon-download-alt',
                enable: true,
                title: 'Download PDF',
                location: '/docs/MikeTuszynski_Resume.pdf'
            },
            {
                icon: 'icon-download-alt',
                enable: true,
                title: 'Download Word',
                location: '/docs/MikeTuszynski_Resume.docx'
            },
            {
                icon: 'icon-list-alt',
                title: 'vCard',
                enable: true,
                location: '#'
            },
            {
                icon: 'icon-star-empty',
                enable: true,
                title: 'Blog',
                location: 'http://miketuszynski.info/blog/'
            }
        ]
    })
}

if (Skills.find().count() === 0)
{
    Skills.insert({name: 'JavaScript', proficiency: '90'});
    Skills.insert({name: 'JSON / XML Data Exchange', proficiency: '85'});
    Skills.insert({name: 'LAMP Administration', proficiency: '80'});
    Skills.insert({name: 'PHP / MySQL', proficiency: '80'});
    Skills.insert({name: 'CSS/LESS', proficiency: '75'});
    Skills.insert({name: 'JQuery', proficiency: '75'});
    Skills.insert({name: 'Meteor.js', proficiency: '50'});
    Skills.insert({name: '.NET 3.5 / 4.0', proficiency: '50'});
    Skills.insert({name: 'Ruby / Rails', proficiency: '40'});
    Skills.insert({name: 'Python 2 / 3', proficiency: '40'});
    Skills.insert({name: 'Selenium / Sauce Labs', proficiency: '30'});
}

if (Education.find().count() === 0)
{
    Education.insert({
        schoolName: 'Saint Joseph\'s University',
        location: 'Philadelphia, PA',
        degree: 'Bachelors of Science',
        major: 'Management and Information Systems',
        graduationDate: 'September 2001'
    })
}