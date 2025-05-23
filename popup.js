chrome.storage.local.get("clipboardHistory", (data) => {
    const list = document.getElementById("list");
    (data.clipboardHistory || []).slice().reverse().forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "item";

        const preview = item.cleaned.slice(0, 100) + (item.cleaned.length > 100 ? "..." : "");
        div.textContent = preview;

        const btn1 = document.createElement("button");
        btn1.textContent = "Copy Original";
        btn1.onclick = () => navigator.clipboard.writeText(item.original);

        const btn2 = document.createElement("button");
        btn2.textContent = "Copy Cleaned";
        btn2.onclick = () => navigator.clipboard.writeText(item.cleaned);

        div.appendChild(btn1);
        div.appendChild(btn2);
        list.appendChild(div);
    });
});