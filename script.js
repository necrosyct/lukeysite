document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interação do Botão Principal de Download
    const downloadButton = document.querySelector('.download-btn.purple-btn');
    
    // NOVO: Seleciona o contêiner da imagem (se estiver usando a solução JS/CSS)
    const previewImageContainer = document.getElementById('preview-image-container');
    
    if (downloadButton) {
        // Se você estiver usando a solução JS para o hover, mantenha estes eventos:
        if (previewImageContainer) {
            downloadButton.addEventListener('mouseover', () => {
                previewImageContainer.classList.add('show-preview');
            });
            downloadButton.addEventListener('mouseout', () => {
                previewImageContainer.classList.remove('show-preview');
            });
        }

        downloadButton.addEventListener('click', () => {
            console.log("Iniciando download de LuKey...");
            
            // ** LINHA MODIFICADA/SUBSTITUÍDA **
            window.location.href = "https://github.com/necrosyct/lukeydownload/raw/refs/heads/main/LuKey.exe";
            
            // Remove o alerta de simulação
            // alert("Download de LuKey (v3.0) iniciado. (Simulação)");
        });
    }

// ... (O restante do seu código, como o Botão Steam Tools, permanece o mesmo)
// ...
// ...

    // 2. Interação do Botão Steam Tools na Navbar
    const steamToolsButton = document.querySelector('.steamtools-btn');
    
    if (steamToolsButton) {
        steamToolsButton.addEventListener('click', () => {
            console.log("Botão Steam Tools clicado.");
            
            // SUBSTITUA esta linha pelo link para a página/site de ferramentas:
             window.open("https://www.steamtools.net/"); 
            
            // alert("Redirecionando para a página de Steam Tools. (Simulação)");
        });
    }
});
