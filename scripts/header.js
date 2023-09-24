const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');
const menu = document.querySelector('.menu');
const navBlock = document.querySelector('.nav-block');

// Ajouter un événements au clic sur l'icône du menu d'ouverture
openIcon.addEventListener('click', () => {
    // Afficher la div 'menu'
    menu.style.display = 'block';

    // Masquer l'icône d'ouverture et le nav-block
    openIcon.style.display = 'none';
    navBlock.style.display = 'none';

    // Afficher l'icône de fermeture
    closeIcon.style.display = 'block';
});

// Ajouter un événement au clic sur l'icône du menu de fermeture
closeIcon.addEventListener('click', () => 
{
    // Masquer l'icône de fermeture
    closeIcon.style.display = 'none';
    
    // jouer l'animation slide-out pour faire dissparaître le menu
    menu.style.animation = 'slide-out 0.3s ease forwards';

    // Afficher l'icône d'ouverture et le nav-block
    openIcon.style.display = 'block';
    navBlock.style.display = 'block';

    // Réinitialiser l'animation pour qu'elle puisse être réutilisée lors de l'ouverture suivante
    setTimeout(() => {
        menu.style.display = 'none';
        menu.style.animation = '';
    },300 );

});