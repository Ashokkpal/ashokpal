document.addEventListener("DOMContentLoaded", () => {
  const svg = document.getElementById("timeline-svg");
  const connections = [
    ["exp1", "exp2"],
    ["exp3", "exp4"]
  ];

  const drawCurve = (startEl, endEl) => {
    const startBox = startEl.getBoundingClientRect();
    const endBox = endEl.getBoundingClientRect();
    const svgBox = svg.getBoundingClientRect();

    const startX = startBox.right - svgBox.left;
    const startY = startBox.top + startBox.height / 2 - svgBox.top;

    const endX = endBox.left - svgBox.left;
    const endY = endBox.top + endBox.height / 2 - svgBox.top;

    const midX = (startX + endX) / 2;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "var(--primary-color)");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("stroke-dasharray", "4,4");
    path.setAttribute("marker-end", "url(#arrow)");

    const d = `M${startX},${startY} C${midX},${startY} ${midX},${endY} ${endX},${endY}`;
    path.setAttribute("d", d);

    svg.appendChild(path);
  };

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `
    <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="var(--primary-color)" />
    </marker>`;
  svg.appendChild(defs);

  const redrawCurves = () => {
    svg.innerHTML = "";
    svg.appendChild(defs);
    connections.forEach(([fromId, toId]) => {
      const from = document.getElementById(fromId);
      const to = document.getElementById(toId);
      if (from && to) drawCurve(from, to);
    });
  };

  redrawCurves();
  window.addEventListener("resize", redrawCurves);
});
