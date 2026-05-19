document.addEventListener("DOMContentLoaded", () => {
    // 1. Efeito de Entrada com Animação nos Elementos de Redes Sociais
    const socialColumns = document.querySelectorAll(".social-column");
    socialColumns.forEach((col, index) => {
        col.style.opacity = "0";
        col.style.transform = "scale(0.8) translateY(10px)";
        col.style.transition =
            "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards";

        setTimeout(() => {
            col.style.opacity = "1";
            col.style.transform = "scale(1) translateY(0)";
        }, 150 * index);
    });

    // 2. Animação Progressiva nos Gráficos SVG das Métricas
    const chartPaths = document.querySelectorAll(".chart-svg path");
    chartPaths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        path.style.transition = "stroke-dashoffset 1.5s ease-in-out";

        setTimeout(() => {
            path.style.strokeDashoffset = "0";
        }, 500);
    });

    // 3. Efeito Interativo de Passagem de Mouse nos Cards de Métricas
    const metricCards = document.querySelectorAll(".metric-sub-card");
    metricCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.background = "rgba(15, 23, 42, 0.85)";
            card.style.borderColor = "rgba(255, 255, 255, 0.1)";
            card.style.transform = "translateX(3px)";
            card.style.transition = "all 0.3s ease";
        });
        card.addEventListener("mouseleave", () => {
            card.style.background = "rgba(15, 23, 42, 0.4)";
            card.style.borderColor = "rgba(255, 255, 255, 0.03)";
            card.style.transform = "translateX(0)";
        });
    });
});
