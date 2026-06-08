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
            card.style.background = "rgba(15, 23, 42, 0.5)";
            card.style.borderColor = "rgba(255, 255, 255, 0.03)";
            card.style.transform = "translateX(0)";
        });
    });

    // 5. Simulação de Carregamento (Preloader) - CORRIGIDO
    const preloader = document.querySelector(".preloader");
    if (preloader) {
        let progress = 0;
        const progressText = document.querySelector(".progress-text");

        // Usamos setInterval para executar o código repetidamente a cada 30ms
        const interval = setInterval(() => {
            progress++;
            if (progressText) {
                progressText.innerText = `${progress}%`;
            }

            // Quando chegar a 100%, limpa o intervalo e esconde o preloader
            if (progress >= 100) {
                clearInterval(interval);

                preloader.style.transition = "opacity 0.5s ease";
                preloader.style.opacity = "0";

                setTimeout(() => {
                    preloader.style.display = "none";
                }, 500);
            }
        }, 30); // Controla a velocidade do carregamento (30ms por número)
    }
    // Objeto contendo os textos personalizados e estilizados para o Modal
    const modalData = {
        visao: {
            title: "Visão de Negócio",
            text: "Aplicação direta de conceitos estratégicos e analíticos da Administração no desenvolvimento de software. Foco total em arquiteturas eficientes, mapeamento de processos limpos e entrega de real valor comercial ao usuário.",
        },
        experiencia: {
            title: "Experiência Real",
            text: "Anos de atuação no setor de Segurança Privada lapidaram competências indispensáveis na tecnologia: gerenciamento ágil de crises, atenção obsessiva a detalhes, mitigação rigorosa de riscos e resiliência extrema sob pressão.",
        },
        transicao: {
            title: "Transição com Propósito",
            text: "A mudança da segurança patrimonial para a engenharia de software foi um movimento calculado. União perfeita da disciplina operacional e proteção de ativos físicos com a construção de sistemas blindados, escaláveis e modernos.",
        },
    };

    // Seleção de elementos do DOM
    const cards = document.querySelectorAll(".center-card");
    const modal = document.getElementById("infoModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const modalIcon = document.getElementById("modalIcon");
    const closeBtn = document.querySelector(".modal-close");

    // Função para abrir o modal com conteúdo correto
    cards.forEach((card) => {
        card.addEventListener("click", (e) => {
            e.preventDefault(); // Evita que a página pule devido ao href="#"

            const target = card.getAttribute("data-target");
            const data = modalData[target];

            if (data) {
                // Injeta o título e texto correspondentes
                modalTitle.innerText = data.title;
                modalText.innerText = data.text;

                // Copia o ícone do card atual (com as cores originais) para dentro do modal
                const iconClone =
                    card.querySelector(".center-card-icon").innerHTML;
                modalIcon.innerHTML = iconClone;

                // Abre o modal adicionando a classe active
                modal.classList.add("active");
            }
        });
    });

    // Fechar ao clicar no "X"
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Fechar ao clicar fora do card (na zona escura de overlay)
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("remove"); // fallback de garantia
            modal.classList.remove("active");
        }
    });

    // Fechar com a tecla ESC para acessibilidade gamer/tech
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            modal.classList.remove("active");
        }
    });
});
