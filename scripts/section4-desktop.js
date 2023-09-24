if (window.matchMedia("(min-width: 768px)").matches) 
{
    const cab1 = document.querySelector('.section4-desktop #desktopSingleCab');
    const singleCab = document.getElementById('desktopSingleCab');

    const triggerSingle = document.querySelector('.section4-desktop .triggerSingle');
    const triggerCabs = document.querySelectorAll('.section4-desktop .triggerCab');

    const cabs = document.querySelectorAll('.section4-desktop .cab');

// Ajoutez un gestionnaire de clic à chaque déclencheur
triggerCabs.forEach((triggerCab, index) => 
{
    triggerCab.addEventListener('click', function () 
    {
        // Récupérez l'ID du cab à afficher à partir de l'attribut data-cab
        // Ciblez les éléments par leur classe correspondante
        const cabClass = this.getAttribute('data-cab');
        const cab = document.querySelector(`.${cabClass}`); // Utilisez une classe
        cab1.style.display = 'none';

        // Masquez tous les autres cabs
        cabs.forEach((otherCab, otherIndex) => 
        {
            if (otherIndex !== index) 
            {
                // Ajoutez la classe d'animation "slide-out" aux autres cabs
                otherCab.classList.add('slide-out');
                // Masquez les autres cabs après l'animation
                setTimeout(() => {
                    otherCab.style.display = 'none';
                    // Supprimez la classe d'animation après avoir masqué les autres cabs
                    otherCab.classList.remove('slide-out');
                }, 300); // Durée de l'animation
            }
        });

    });
});

    // Ajoutez un gestionnaire de clic à triggerCab1 pour afficher singleCab
    triggerSingle.addEventListener('click', function () {
        // Affichez singleCab
        cab1.style.display = 'block';

        // Masquez tous les autres cabs
        cabs.forEach((otherCab) => {
            otherCab.style.display = 'none';
        });

        // Ajoutez la classe d'animation "slide-in" au cab cible
        singleCab.classList.add('slide-in');
    });

}