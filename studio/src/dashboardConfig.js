export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "616006c727f46d009205bab4",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-3-studio-ch48ysi1",
                  apiId: "70b2c407-2de5-40ad-955f-05d23532b06d",
                },
                {
                  buildHookId: "616006c75d40dc009240148a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-3-web-dnkdb4p7",
                  apiId: "a15415bf-f9f6-46f1-a917-ffad27002068",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/bgoonz/sanity-gatsby-blog3",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-3-web-dnkdb4p7.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
