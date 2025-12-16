// Projects data for Ayush Sonawane Portfolio
// Based on actual GitHub repositories and engineering focus

const projectsData = [
    {
        id: 'distributed-sys-kv',
        title: 'Distributed Key-Value Store',
        category: 'Systems Programming',
        problem: 'Building a distributed key-value store implementation in C++ featuring leader-follower architecture with consensus-based replication and failure recovery.',
        architecture: {
            components: ['Leader Election', 'Consensus Protocol', 'Replication Manager', 'Failure Recovery', 'Storage Engine'],
            description: 'Implements leader-follower architecture with consensus-based replication for strong consistency and automatic failure recovery mechanisms.'
        },
        decisions: [
            'Used leader-follower pattern for simplified consistency guarantees',
            'Implemented consensus protocol for distributed agreement',
            'Added automatic failure detection and recovery mechanisms',
            'Built persistent storage layer with crash recovery'
        ],
        techStack: ['C++', 'Networking', 'Consensus Algorithms', 'Distributed Systems'],
        githubUrl: 'https://github.com/Ayush9284/distributed_sysKV',
        highlights: ['Leader-follower architecture', 'Consensus-based replication', 'Automatic failure recovery']
    },
    {
        id: 'navolang-compiler',
        title: 'Navolang Programming Language',
        category: 'Compilers & Languages',
        problem: 'Developing a modern, statically-typed programming language with LLVM-based code generation, featuring clean syntax and efficient compilation to native code.',
        architecture: {
            components: ['Lexical Analyzer', 'Recursive Descent Parser', 'Semantic Analyzer', 'LLVM IR Generator', 'Symbol Table'],
            description: 'Complete compiler pipeline from source code to native executables using LLVM infrastructure for optimization and code generation.'
        },
        decisions: [
            'Implemented recursive descent parser for clean syntax analysis',
            'Used LLVM for portable and optimized code generation',
            'Added strong static type system with type inference',
            'Built comprehensive symbol table for scope management'
        ],
        techStack: ['C++20', 'LLVM', 'CMake', 'Compiler Design', 'Static Analysis'],
        githubUrl: 'https://github.com/Ayush9284/navoLang',
        highlights: ['LLVM-based codegen', 'Static type system', 'Native compilation']
    },
    {
        id: 'openehr-mcp-server',
        title: 'openEHR MCP Server',
        category: 'AI & ML Systems',
        problem: 'Creating an intelligent bridge connecting AI assistants to Electronic Health Record systems using Model Context Protocol and openEHR standards for healthcare data interoperability.',
        architecture: {
            components: ['MCP Server', 'EHRbase Integration', 'Vector Database', 'Medical Coding AI', 'Template Manager'],
            description: 'AI-powered medical coding system with semantic search over ICD-10 codes using Qdrant vector database and FastMCP framework.'
        },
        decisions: [
            'Used Model Context Protocol for standardized AI integration',
            'Implemented semantic search with sentence transformers for medical coding',
            'Added openEHR compliance for healthcare data standards',
            'Built comprehensive EHR management tools with natural language interface'
        ],
        techStack: ['Python', 'FastMCP', 'Qdrant', 'openEHR', 'EHRbase', 'Transformers'],
        githubUrl: 'https://github.com/Ayush9284/openehr_mcp',
        highlights: ['AI-powered medical coding', 'Healthcare data standards', 'Natural language interface']
    },
    {
        id: 'pcb-defect-detection',
        title: 'PCB Defect Detection System',
        category: 'AI & ML Systems',
        problem: 'Implementing an advanced computer vision system for automated PCB defect detection using multiple machine learning approaches including CNN and YOLO models.',
        architecture: {
            components: ['CNN Classifier', 'YOLO Object Detection', 'Image Preprocessing', 'Multi-Model Ensemble', 'Defect Classification'],
            description: 'Combines CNN and YOLO models for comprehensive defect detection in both bare and mounted PCBs with Google Colab deployment.'
        },
        decisions: [
            'Used dual-model approach combining CNN and YOLO for different defect types',
            'Implemented data augmentation pipeline for robust training',
            'Added support for both bare and mounted PCB analysis',
            'Built Google Colab integration for cloud-based inference'
        ],
        techStack: ['Python', 'TensorFlow', 'PyTorch', 'YOLO', 'OpenCV', 'Google Colab'],
        githubUrl: 'https://github.com/Ayush9284/pcb_defect_detection',
        highlights: ['Multi-model detection', 'Cloud deployment', 'Industrial quality control']
    },
    {
        id: 'mongodb-mcp-server',
        title: 'MongoDB MCP Server',
        category: 'AI & ML Systems',
        problem: 'Building a Model Context Protocol server that provides MongoDB database operations through a standardized interface, allowing AI assistants to interact with databases using natural language.',
        architecture: {
            components: ['MCP Protocol Handler', 'MongoDB Client', 'Query Translator', 'Natural Language Interface', 'Auto-approval System'],
            description: 'Standardized database interface enabling AI assistants to perform CRUD operations on MongoDB through natural language commands.'
        },
        decisions: [
            'Implemented MCP protocol for standardized AI integration',
            'Added comprehensive CRUD operation support',
            'Built natural language to MongoDB query translation',
            'Used auto-approval system for safe database operations'
        ],
        techStack: ['JavaScript', 'Node.js', 'MongoDB', 'MCP Protocol', 'Natural Language Processing'],
        githubUrl: 'https://github.com/Ayush9284/mongoDB_mcp_project',
        highlights: ['Natural language queries', 'Standardized AI interface', 'Safe database operations']
    },
    {
        id: 'web-crawler',
        title: 'Web Crawler CLI Tool',
        category: 'Systems / Utilities',
        problem: 'Developing a simple web crawler tool that traverses a website’s internal links and generates a structured report of discovered URLs, useful for analysis and link mapping.',
        architecture: {
            components: ['URL Fetcher', 'Internal Link Extractor', 'Traversal Queue', 'Report Generator'],
            description: 'Command-line web crawling utility that visits internal pages and collects URLs, with structured output for analysis.'
        },
        decisions: [
            'Used efficient queue-based traversal for breadth-first crawling',
            'Implemented URL extraction and filtering',
            'Generated structured output for analysis',
            'Handled basic error and timeout cases for robustness'
        ],
        techStack: ['JavaScript', 'Node.js', 'CLI Tooling', 'Web Utilities'],
        githubUrl: 'https://github.com/Ayush9284/web-crawler',
        highlights: ['CLI utility', 'Traversal & URL extraction', 'Structured output']
    },
    {
        id: 'aco-optimization',
        title: 'Ant Colony Optimization Algorithm',
        category: 'Algorithmic Programming',
        problem: 'Implementing the Network Path Optimization Problem using Ant Colony Optimization - a nature-inspired metaheuristic algorithm that mimics how ants find optimal paths.',
        architecture: {
            components: ['Ant Colony Simulator', 'Pheromone Management', 'Path Optimization', 'Graph Representation', 'Convergence Analysis'],
            description: 'Nature-inspired optimization algorithm implementation for solving complex network path problems with adaptive pheromone-based learning.'
        },
        decisions: [
            'Implemented pheromone-based path selection mechanism',
            'Added adaptive parameter tuning for convergence optimization',
            'Built efficient graph representation for network problems',
            'Used probabilistic decision making inspired by ant behavior'
        ],
        techStack: ['C++', 'Graph Algorithms', 'Optimization Theory', 'Metaheuristics'],
        githubUrl: 'https://github.com/Ayush9284/ACO-algo',
        highlights: ['Nature-inspired algorithm', 'Network optimization', 'Adaptive learning']
    }
];

// Export for use in main.js
window.projectsData = projectsData;
