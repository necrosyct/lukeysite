document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interação do Botão Principal de Download
    const downloadButton = document.querySelector('.download-btn.purple-btn');
    
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            console.log("Iniciando download de LuKey...");
            
            // SUBSTITUA esta linha pelo link direto para o arquivo de download:
            // window.location.href = "https://seusite.com/LuKey_v3.zip";
            
            alert("Download de LuKey (v3.0) iniciado. (Simulação)");
        });
    }

    // 2. Interação do Botão Steam Tools na Navbar
    const steamToolsButton = document.querySelector('.steamtools-btn');
    
    if (steamToolsButton) {
        steamToolsButton.addEventListener('click', () => {
            console.log("Botão Steam Tools clicado.");
            
            // SUBSTITUA esta linha pelo link para a página/site de ferramentas:
            // window.open("https://link-da-steamtools.com", "_blank"); 
            
            alert("Redirecionando para a página de Steam Tools. (Simulação)");
        });
    }
});