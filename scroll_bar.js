document.addEventListener("scroll", () => {
    const doc = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    const progress = (doc.scrollTop / total) * 100;

    document.querySelector(".top-scrollbar-thumb").style.width = progress + "%";
});