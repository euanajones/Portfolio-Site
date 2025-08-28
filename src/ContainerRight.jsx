import ExperienceCard from './ExperienceCard';
import SkillsDisplay from './Skills';

function ContainerRight() {
return (
    <div className="relative max-w-2/3">
            <div 
                id="scrollable-container"
                className="flex justify-between flex-col pr-40 pl-40 pt-20 pb-20 min-h-dvh max-h-dvh overflow-y-auto"
            >
            <h3 className="text-(--text) text-2xl font-bold mb-4" id="about-header">About</h3>
            <p className="text-(--primary) mb-8 leading-relaxed">
                Adaptable and curious Software Engineer with a foundational knowledge of AI principles and a passion for the high-performance world of motorsport. A dedicated and enthusiastic learner, keen to apply a strong work ethic and problem-solving skills to contribute to impactful software projects and rapidly develop new technical expertise.
            </p>
            
            <h3 className="text-(--text) text-2xl font-bold mb-4" id="experience-header">Experience</h3>
            <p className="text-(--primary) mb-8 leading-relaxed">
                Here are a few of my recent experiences, professional and academic:
                <ExperienceCard
                    title="Pre-Event Associate"
                    subtitle="Hackathons UK"
                    dateRange="Aug 2025 - Present"
                    description="Currently undertaking training to become a Pre-Event Associate with Hackathons UK, a leading organisation that supports and organises hackathon events across the UK. Gaining valuable experience in event planning, logistics, and team coordination to contribute to the successful execution of large-scale hackathon events."
                />
                <ExperienceCard
                    title="Hackathon Director"
                    subtitle="HackSheffield10"
                    dateRange="June 2025 - Present"
                    description="Spearheading the organisation of HackSheffield10, a large-scale 24-hour hackathon event with an expected 300 participants. Leading a team to deliver a seamless event experience, coordinating logistics, sponsorships, and participant engagement to ensure the success of the event."
                />
                <ExperienceCard
                    title="Competitions Officer"
                    subtitle="Sheffield Ethical Hackers Society"
                    dateRange="June 2025 - Present"
                    description="Planning and presenting weekly workshops on various cybersecurity topics, including web security, network security, and ethical hacking techniques. Organising and leading the society's competitions events, fostering a collaborative learning environment."
                />
                <ExperienceCard
                    title="First Year Representative"
                    subtitle="Computer Science Society"
                    dateRange="Oct 2024 - June 2025"
                    description="Represented the interests of first-year Computer Science students. Organised events and study sessions to foster a supportive community, such as the annual Charity Summer Ball and the annual hackathon event, HackSheffield9."
                />
                <ExperienceCard
                    title="Event Organiser"
                    subtitle="HackSheffield9"
                    dateRange="Nov 2024"
                    description="Helped organise a large scale 24-hour hackathon event with over 300 participants. Collaborated with a team to deliver a seamless event experience, providing on the day support and troubleshooting issues as they arose."
                />
            </p>
            
            <h3 className="text-(--text) text-2xl font-bold mb-4" id="projects-header">Projects</h3>
            <p className="text-(--primary) mb-8 leading-relaxed">
                Here are a few of my projects I am currently working on, and a few I have completed:
                <ExperienceCard
                    title="Grand Prix Data Analysis"
                    subtitle="Python, FastAPI, MatPlotlib, Pandas"
                    dateRange="Mar 2025 - Present"
                    description="Engineered an end-to-end Formula 1 analytics pipeline in Python, processing large-scale telemetry data via the FastF1 API. Implemented feature engineering with Pandas and developed visualisations with Matplotlib to derive actionable insights on race strategy. Designing and implementing a graphical user interface (GUI) to lower the barrier of entry for complex telemetry analysis, backed by a predictive engine that forecasts race results with over 80% accuracy."
                />
                <ExperienceCard
                    title="UniConnect Mentorship Platform"
                    subtitle="Ruby Sinatra, SQLite, HTML/CSS"
                    dateRange="Feb 2025 - June 2025"
                    description="Led the development of UniConnect, handling the entire stack from the SQLite database design and schema creation to the Ruby Sinatra backend and the HTML/CSS front-end. Coordinated a 6-person team to deliver UniConnect, delegating tasks based on individual strengths and tracking project deliverables against a shared timeline to ensure successful completion. Championed an Agile (Scrum) methodology that eliminated last‑minute crunch time and fostered a sustainable pace, ensuring the team delivered all project milestones on time without burnout."
                />
            </p>
            
            <h3 className="text-(--text) text-2xl font-bold mb-4" id="skills-header">Skills</h3>
            <p className="text-(--primary) mb-8 leading-relaxed">
                <SkillsDisplay />
            </p>
            
            {/* <h3 className="text-(--text) text-2xl font-bold mb-4">Education</h3>
            <p className="text-(--primary) mb-8 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p> */}
            
        </div>
        </div>
    );
}

export default ContainerRight;