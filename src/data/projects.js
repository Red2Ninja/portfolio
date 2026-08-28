export const projects = [
    {
        number: "01",
        title: "SAVIO",
        subtitle: "SUBSCRIPTION & WARRANTY MANAGER",
        image: "/images/savio.png",

        description:
            "A full-stack platform for managing subscriptions and warranties with authentication, renewal scheduling, expiry detection, spending analytics, and persistent user-specific records.",

        details:
            "Built with modular REST APIs and service-layer architecture, with validation, centralized error handling, automated renewal reminders, unit testing, and containerized deployment.",

        tags: [
            "JAVASCRIPT",
            "REACT",
            "FASTAPI",
            "POSTGRESQL",
            "DOCKER"
        ],

        github:
            "https://github.com/Red2Ninja/Savio-Subscription-and-Warranty-manager"
    },

    {
        number: "02",
        title: "FALLGUARD",
        subtitle: "REAL-TIME FALL DETECTION",
        image: "/images/fallguard.png",

        description:
            "A real-time fall detection application combining pose estimation, deep learning, and face recognition to identify incidents and trigger identity-based alerts.",

        details:
            "Validated on 50+ test videos and integrated LLM-powered incident reporting to generate posture analytics, safety recommendations, and annotated alerts within 5 seconds through caregiver dashboards.",

        tags: [
            "REACT",
            "FASTAPI",
            "OPENCV",
            "LLMs",
            "MONGODB",
            "DOCKER"
        ],

        github:
            "https://github.com/Red2Ninja/FallGaurd"
    },

    {
        number: "03",
        title: "TBSHIELD",
        subtitle: "PROMPT INJECTION DETECTION",
        image: "/images/tbshield.png",

        description:
            "A security research tool designed to detect adversarial instructions hidden inside source-code comments that target LLM-based vulnerability auditors.",

        details:
            "Combines rule-based filtering with embedding-based analysis and semantic contradiction scoring. Evaluated using CASTLE-C250 with 500+ adversarial comment variants and 1,000 evaluation samples.",

        tags: [
            "PYTHON",
            "LLMs",
            "NLP",
            "PROMPT INJECTION",
            "CYBERSECURITY"
        ],

        github:
            "https://github.com/Red2Ninja/Trust-Boundary-Violations-in-LLM-Based-Code-Security-Auditors"
    }
];