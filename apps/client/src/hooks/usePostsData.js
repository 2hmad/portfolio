const usePostsData = async () => {
  try {
    const response = await fetch("/api/posts.json", {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export default usePostsData;
