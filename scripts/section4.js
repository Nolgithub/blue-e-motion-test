// Sélectionnez tous les éléments de classe "trigger-cab"
const triggerCab1 = document.querySelector('.trigger-cab1');
const triggerCabs = document.querySelectorAll('.trigger-cab');
const singleCab = document.getElementById('singleCab');


// Sélectionnez tous les éléments de classe "cab"
const cabs = document.querySelectorAll('.cab');

// Ajoutez un gestionnaire de clic à chaque déclencheur
triggerCabs.forEach((triggerCab, index) => 
{
    triggerCab.addEventListener('click', function () 
    {
        // Récupérez l'ID du cab à afficher à partir de l'attribut data-cab
        const cabId = this.getAttribute('data-cab');
        const cab = document.getElementById(cabId);
        singleCab.style.display = 'none';

        // Ajoutez la classe d'animation "slide-in" au cab cible
        cab.classList.add('slide-in');

        // Affichez le cab cible
        cab.style.display = 'block';

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
triggerCab1.addEventListener('click', function () {
    // Affichez singleCab
    singleCab.style.display = 'block';

    // Masquez tous les autres cabs
    cabs.forEach((otherCab) => {
        otherCab.style.display = 'none';
    });

    // Ajoutez la classe d'animation "slide-in" au cab cible
    singleCab.classList.add('slide-in');
});