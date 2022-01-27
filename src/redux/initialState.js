const initialState = {
  posts: [
    {
      id: "1",
      title: "Article title 1",
      shortDescription: "Short description of the article...",
      content: "Main content of the article",
      publishedDate: new Date("02-02-2022"),
      author: "John Doe",
      category: "Sport",
      categoryId: 1,
    },
    {
      id: "2",
      title: "Article title 2",
      shortDescription: "Short description of the article...",
      content: "Main content of the article",
      publishedDate: new Date("02-02-2022"),
      author: "Anna Von",
      category: "News",
      categoryId: 2,
    },
    {
      id: "3",
      title: "Article title 3",
      shortDescription: "Short description of the article...",
      content: "Main content of the article",
      publishedDate: new Date("02-02-2022"),
      author: "Filip Son",
      category: "Movies",
      categoryId: 3,
    },
  ],
  categories: [
    { id: 1, value: "Sport" },
    { id: 2, value: "News" },
    { id: 3, value: "Movies" },
  ],
};

export default initialState;
