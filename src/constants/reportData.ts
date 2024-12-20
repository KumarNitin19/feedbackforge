const reports = {
    report1: {
        summary: "This employee excels in communication, teamwork, and initiative. They consistently meet deadlines and demonstrate strong problem-solving skills. However, there's a need for improvement in long-term strategic planning and task delegation.",
        strengths: [
            "Excellent communication skills with team members and stakeholders",
            "Consistently delivers high-quality work ahead of deadlines",
            "Shows great initiative in problem-solving"
        ],
        improvements: [
            "Could benefit from more strategic long-term planning",
            "Sometimes takes on too many tasks simultaneously"
        ],
        suggestions: [
            "Consider delegating more tasks to team members",
            "Participate in leadership training programs",
            "Schedule regular check-ins with stakeholders"
        ],
        sentiment: {
            positive: 70,
            neutral: 20,
            negative: 10
        },
        metrics: [
            { category: "Technical Skills", score: 8.5 },
            { category: "Communication", score: 9.0 },
            { category: "Leadership", score: 7.5 },
            { category: "Initiative", score: 8.0 },
            { category: "Teamwork", score: 8.8 }
        ]
    },

    report2: {
        summary: "The employee demonstrates exceptional leadership and communication skills. They consistently exceed expectations in technical performance and are a key asset in team collaborations. However, further focus on long-term strategic planning would enhance their leadership capabilities.",
        strengths: [
            "Outstanding leadership skills and team management",
            "Exemplary communication with team members and stakeholders",
            "Strong technical expertise in their area of work"
        ],
        improvements: [
            "Focus on strategic long-term planning to align with organizational goals",
            "Further improve delegation skills to avoid micromanagement"
        ],
        suggestions: [
            "Attend leadership development programs",
            "Engage in strategic planning workshops",
            "Mentor junior team members"
        ],
        sentiment: {
            positive: 85,
            neutral: 10,
            negative: 5
        },
        metrics: [
            { category: "Technical Skills", score: 9.2 },
            { category: "Communication", score: 9.5 },
            { category: "Leadership", score: 6.0 },
            { category: "Initiative", score: 7.0 },
            { category: "Teamwork", score: 6.9 }
        ]
    },

    report3: {
        summary: "The employee performs well but there are areas where improvement is necessary. They are reliable but need to focus on enhancing leadership skills and communication. Delegation and task prioritization are also areas of concern.",
        strengths: [
            "Delivers work on time with attention to detail",
            "Good teamwork and collaboration with peers"
        ],
        improvements: [
            "Needs to develop stronger leadership and management skills",
            "Can improve communication and transparency with stakeholders",
            "Better task prioritization and delegation needed"
        ],
        suggestions: [
            "Participate in communication and leadership training",
            "Work on improving delegation techniques",
            "Seek feedback from team members to improve leadership"
        ],
        sentiment: {
            positive: 50,
            neutral: 30,
            negative: 20
        },
        metrics: [
            { category: "Technical Skills", score: 7.8 },
            { category: "Communication", score: 5.0 },
            { category: "Leadership", score: 6.5 },
            { category: "Initiative", score: 7.5 },
            { category: "Teamwork", score: 7.0 }
        ]
    },

    report4: {
        summary: "The employee requires improvement in multiple areas, especially leadership, communication, and task management. While they meet basic expectations, a more proactive approach to problem-solving and communication is needed.",
        strengths: [
            "Completes tasks with reasonable quality and timeliness"
        ],
        improvements: [
            "Needs to improve leadership and delegation skills",
            "Communication with stakeholders can be more efficient",
            "Lacks initiative in proposing solutions and driving projects"
        ],
        suggestions: [
            "Participate in leadership and communication training",
            "Focus on proactive problem-solving and decision-making",
            "Engage more actively in team discussions and strategy planning"
        ],
        sentiment: {
            positive: 40,
            neutral: 35,
            negative: 25
        },
        metrics: [
            { category: "Technical Skills", score: 6.8 },
            { category: "Communication", score: 5.5 },
            { category: "Leadership", score: 4.0 },
            { category: "Initiative", score: 5.8 },
            { category: "Teamwork", score: 6.5 }
        ]
    },

    report5: {
        summary: "The employee's performance has been subpar in key areas such as leadership, communication, and task management. There is a significant need for improvement in almost all metrics. Leadership and initiative are particularly lacking, and more focus on long-term planning is needed.",
        strengths: [
            "Consistently delivers high-quality work ahead of deadlines"
        ],
        improvements: [
            "Needs to improve leadership skills",
            "Communication with stakeholders can be more efficient",
            "Could benefit from more strategic long-term planning"
        ],
        suggestions: [
            "Participate in leadership and communication training",
            "Delegate tasks more effectively",
            "Work closely with the team to improve strategic planning"
        ],
        sentiment: {
            positive: 25,
            neutral: 35,
            negative: 40
        },
        metrics: [
            { category: "Technical Skills", score: 5.0 },
            { category: "Communication", score: 4.0 },
            { category: "Leadership", score: 3.5 },
            { category: "Initiative", score: 4.5 },
            { category: "Teamwork", score: 4.0 }
        ]
    },

    report6: {
        summary: "The employee consistently exceeds expectations in all areas. Their leadership, communication, technical skills, and initiative are all exemplary. They are highly trusted by the team and contribute significantly to the success of the organization.",
        strengths: [
            "Exceptional leadership skills and team management",
            "Excellent communication with all team members and stakeholders",
            "Highly proactive and consistently demonstrates strong initiative"
        ],
        improvements: [],
        suggestions: [
            "Continue to lead by example",
            "Consider mentoring junior team members"
        ],
        sentiment: {
            positive: 95,
            neutral: 5,
            negative: 0
        },
        metrics: [
            { category: "Technical Skills", score: 9.8 },
            { category: "Communication", score: 9.9 },
            { category: "Leadership", score: 9.7 },
            { category: "Initiative", score: 9.5 },
            { category: "Teamwork", score: 9.6 }
        ]
    }
};

export default reports;