export default[

  
        {
            name: "Blog Title",
            desc: "An AI tool to generate blog titles based on your blog information",
            category: "Blog",
            icon: "/blog-title.png",
            aiPrompt: "Give me 5 blog topic ideas in bullet points based on the given niche & outline and give the result in Rich Text Editor format",
            slug: "generate-blog-title",
            form: [
                {
                    label: "Enter your blog niche",
                    field: "input",
                    name: "niche",
                    required: true
                },
                {
                    label: "Enter blog outline",
                    field: "textarea",
                    name: "outline",
                }
            ]
        },
        {
            name: "SEO-Friendly Blog Description",
            desc: "Generate SEO-friendly blog descriptions for better search engine visibility",
            category: "SEO",
            icon: "/seo-blog-description.png",
            aiPrompt: "Write an SEO-friendly blog description based on the given blog title and niche",
            slug: "generate-seo-description",
            form: [
                {
                    label: "Enter your blog title",
                    field: "input",
                    name: "title",
                    required: true
                },
                {
                    label: "Enter your blog niche",
                    field: "input",
                    name: "niche",
                    required: true
                }
            ]
        },
        {
            name: "YouTube Video Title Generator",
            desc: "Generate engaging and clickable YouTube video titles",
            category: "YouTube",
            icon: "/youtube-title.png",
            aiPrompt: "Generate 5 YouTube video title ideas based on the given niche and video description",
            slug: "generate-youtube-title",
            form: [
                {
                    label: "Enter your video niche",
                    field: "input",
                    name: "videoNiche",
                    required: true
                },
                {
                    label: "Enter video description",
                    field: "textarea",
                    name: "videoDescription",
                    required: true
                }
            ]
        },
        {
            name: "YouTube Video Script Generator",
            desc: "Create video scripts for your YouTube videos",
            category: "YouTube",
            icon: "/youtube-script.png",
            aiPrompt: "Generate a detailed YouTube video script based on the given topic and key points",
            slug: "generate-youtube-script",
            form: [
                {
                    label: "Enter your video topic",
                    field: "input",
                    name: "videoTopic",
                    required: true
                },
                {
                    label: "Enter key points or outline",
                    field: "textarea",
                    name: "outline",
                    required: true
                }
            ]
        },
        {
            name: "Twitter Post Generator",
            desc: "Generate engaging tweets for your audience",
            category: "Twitter",
            icon: "/twitter-logo.png",
            aiPrompt: "Generate 5 engaging tweets based on the given topic or promotion",
            slug: "generate-twitter-post",
            form: [
                {
                    label: "Enter your topic or promotion details",
                    field: "textarea",
                    name: "details",
                    required: true
                },
                {
                    label: "Choose tweet tone (e.g., informative, funny, promotional)",
                    field: "select",
                    name: "tone",
                    options: ["Informative", "Funny", "Promotional"],
                    required: true
                }
            ]
        },
        {
            name: "Twitter Hashtag Generator",
            desc: "Generate trending hashtags for your Twitter posts",
            category: "Twitter",
            icon: "/twitter-hashtag.png",
            aiPrompt: "Generate 5 trending hashtags based on the given topic",
            slug: "generate-twitter-hashtag",
            form: [
                {
                    label: "Enter your topic",
                    field: "input",
                    name: "topic",
                    required: true
                },
                {
                    label: "Enter additional keywords (optional)",
                    field: "input",
                    name: "keywords",
                }
            ]
        },
        {
            name: "Content Outline Generator",
            desc: "Create a detailed content outline for your blog posts or articles",
            category: "Content",
            icon: "/content-outline.png",
            aiPrompt: "Generate a detailed content outline based on the given topic",
            slug: "generate-content-outline",
            form: [
                {
                    label: "Enter your blog topic",
                    field: "input",
                    name: "topic",
                    required: true
                }
            ]
        },
        {
            name: "Tagline Generator",
            desc: "Generate catchy taglines or slogans for your brand or blog",
            category: "Marketing",
            icon: "/tagline-generator.png",
            aiPrompt: "Generate 5 catchy taglines for the given brand name and industry",
            slug: "generate-tagline",
            form: [
                {
                    label: "Enter your brand name",
                    field: "input",
                    name: "brandName",
                    required: true
                },
                {
                    label: "Enter your industry",
                    field: "input",
                    name: "industry",
                    required: true
                }
            ]
        }
    
    
]