const section2readMoreChevron  = document.querySelector('.section2-readMore-chevron');
const section2readLessChevron  = document.querySelector('.section2-readLess-chevron');
const readMoreBtn = document.getElementById('readMoreBtn');
const hiddenText = document.querySelector('.hidden-text');
const CTA = document.querySelector('.CTA');
const points = document.querySelector('.points');

readMoreBtn.addEventListener('click', function ()
{
    hiddenText.style.display = 'block';
    hiddenText.style.marginTop = '20px'
    section2readMoreChevron.style.display = "none";
    section2readLessChevron.style.display = "flex";
    CTA.style.display = 'block';
    points.style.display = 'none';

});

readLessBtn.addEventListener('click', function ()
{
    hiddenText.style.display = 'none';
    section2readMoreChevron.style.display = "flex";
    section2readLessChevron.style.display = "none";
    CTA.style.display = 'none';
    points.style.display = 'inline';

})