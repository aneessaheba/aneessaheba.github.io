export const featuredProjects = [
  {
    title: "Distributed Kayak Travel Booking System",
    description: "Built a distributed travel booking system inspired by Kayak supporting search, booking, billing, and analytics for flights, hotels, and cars. Designed backend microservices using FastAPI, Kafka, and relational + NoSQL databases. Developed an AI-powered recommendation service.",
    tech: ["FastAPI", "Kafka", "MySQL", "MongoDB", "Redis"],
    github: "https://github.com/aneessaheba/kayak-distributed-system",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Airbnb Prototype with Agentic AI",
    description: "Built a full-stack Airbnb-style platform with property listings, bookings, and secure authentication. Designed an Agentic AI Concierge using LangChain to generate personalized travel plans and recommendations. Integrated LLM-driven workflows with backend APIs.",
    tech: ["LangChain", "FastAPI", "React", "MySQL"],
    github: "https://github.com/aneessaheba/airbnb-agentic-ai",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Multi-Agent Blog System",
    description: "Built a multi-agent workflow using Ollama LLMs (Planner, Reviewer, Finalizer) for automated blog content creation. Developed a web front-end for blog submission. Deployed using Docker containers and AWS ECS, integrating lightweight local LLMs.",
    tech: ["Ollama", "Docker", "AWS ECS", "HTML/CSS/JS"],
    github: "https://github.com/aneessaheba/ollama-agentic-ai",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Stock Data ETL & Data Warehouse Pipeline",
    description: "Built an ETL pipeline for stock market data using Python, integrating multiple sources and automating data ingestion. Designed a dimensional data warehouse in PostgreSQL for structured financial analysis and reporting. Implemented Dockerized workflows.",
    tech: ["PostgreSQL", "Docker", "ETL", "Dimensional Modeling"],
    github: "https://github.com/aneessaheba/StockMarketETL",
    gradient: "from-orange-500 to-red-500"
  }
];

// Generative AI & Agentic Systems
export const genAIProjects = [
  {
    title: "AI Memory Chatbot Agent",
    description: "Built an intelligent chatbot with multi-tiered memory architecture. Implements short-term conversational memory, session-based summaries, lifetime user context condensation, and episodic memory retrieval with vector embeddings. Features automatic memory consolidation, importance-weighted fact extraction, and context-aware responses.",
    tech: ["FastAPI", "MongoDB", "Google Gemini", "Motor"],
    github: "https://github.com/aneessaheba/Chat-agentic-ai"
  },
  {
    title: "Bike-Share Pass Optimizer",
    description: "Built a single-agent ReAct + MRKL workflow that analyzes Divvy bike-share trip data to recommend whether riders should purchase a membership or stay on pay-per-ride pricing. Implements custom tools (CSV SQL via DuckDB, policy retrieval with web scraping, calculator) with transparent Thought → Action → Observation traces and policy citations for decision justification.",
    tech: ["ReAct", "MRKL", "DuckDB", "Express"],
    github: "https://github.com/aneessaheba/auth-route-and-bike-share-analysis"
  },
  {
    title: "Career Counseling Agent",
    description: "Developed an AI-powered career planning assistant using Gemini LLM and custom tools. Features include Skills Gap Analyzer, Resume Scorer with improvement suggestions (0-10 scale), Salary Estimator, and Interview Question Generator for personalized career guidance.",
    tech: ["Streamlit", "Gemini", "LangChain"],
    github: "https://github.com/aneessaheba/streamlit-career-agent-gemini"
  }
];

// Data Engineering & Analytics
export const dataEngineeringProjects = [
  {
    title: "Spotify Data Analysis",
    description: "Built an ETL pipeline with Spotify API, AWS Glue, and Snowflake. Created interactive Power BI dashboards delivering insights on peak hours, weekend listening patterns, and top artists/tracks.",
    tech: ["AWS Glue", "Snowflake", "Power BI"],
    github: "https://github.com/aneessaheba/Spotify-Data-Analysis"
  },
  {
    title: "Retail Orders Analytics Project",
    description: "Built an end-to-end data pipeline using Python and Pandas to process retail orders dataset. Loaded cleaned data into SQL Server and performed advanced analytics to identify top-performing products, regional sales patterns, monthly trends, and year-over-year growth metrics.",
    tech: ["Python", "Pandas", "SQL Server"],
    github: "https://github.com/aneessaheba/Retail-Orders-Analytics-Project"
  }
];

// Software Engineering & Data Structures
export const softwareEngineeringProjects = [
  {
    title: "CheckMyGrade-OOP-Python",
    description: "Python console-based student grade management application using object-oriented programming principles and CSV data persistence. Supports CRUD operations, search, sort with timing analysis, data encryption, academic reports, and statistical analytics. Implements both array and linked list backends with role-based menus and comprehensive unit tests for performance validation.",
    tech: ["Python", "OOP", "CSV", "Encryption"],
    github: "https://github.com/aneessaheba/CheckMyGrade-OOP-Python"
  },
  {
    title: "Stock Analysis Application",
    description: "Object-oriented stock tracking application with both console and GUI interfaces built using Python. Features embedded database management for saving and retrieving stock data, historical price tracking from web APIs and CSV imports, profit/loss report generation, and interactive chart visualization using Python libraries.",
    tech: ["Python", "OOP", "GUI", "SQLite"],
    github: "https://github.com/aneessaheba/StockMarketAnalysis"
  }
];

// Machine Learning & Computer Vision
export const mlProjects = [
  {
    title: "4DX Movie Technology Using ML",
    description: "Developed CNN-based system for immersive 4DX theater experiences. Processes synchronized audio-visual streams to detect movie events (rain, wind, fog, motion) in real-time and triggers corresponding physical effects with millisecond precision. Achieved 30+ FPS for real-time theater deployment.",
    tech: ["TensorFlow", "CNN", "OpenCV", "Audio Processing"],
    github: "#"
  },
  {
    title: "Face Mask Detection Using ML",
    description: "Production-ready real-time face mask detection system using transfer learning with MobileNetV2. Achieves 95%+ accuracy while maintaining 30+ FPS on standard webcams. Features real-time video processing with OpenCV, multi-face detection, and bounding box visualization optimized for edge deployment.",
    tech: ["MobileNetV2", "OpenCV", "TensorFlow", "Python"],
    github: "#"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Anomaly detection pipeline for identifying fraudulent transactions in imbalanced datasets. Applied PCA for dimensionality reduction and ensemble approach combining Isolation Forest and Random Forest. Addressed class imbalance using SMOTE, achieving high recall while maintaining acceptable precision for real-world fraud prevention.",
    tech: ["PCA", "Random Forest", "Isolation Forest", "scikit-learn"],
    github: "#"
  }
];

// Combined list for backward compatibility
export const additionalProjects = [
  ...genAIProjects,
  ...dataEngineeringProjects,
  ...softwareEngineeringProjects,
  ...mlProjects
];