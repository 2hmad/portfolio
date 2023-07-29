const useProjectsData = async () => {
  try {
    const response = await fetch("/api/projects.json", {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export default useProjectsData;
