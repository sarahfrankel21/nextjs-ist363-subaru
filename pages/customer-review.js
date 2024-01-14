document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.getElementById('reviews-container');

    const mockReviews = [
        { name: 'Sam', rating: 4, review: 'Great car, excellent fuel efficiency!' },
        { name: 'Taylor', rating: 5, review: 'Love the safety features and smooth drive.' },
        
    ];

    function displayReviews(reviews) {
        reviewsContainer.innerHTML = ''; 

        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');

            const ratingElement = document.createElement('div');
            ratingElement.classList.add('rating');
            ratingElement.textContent = 'Rating: ' + '⭐'.repeat(review.rating);

            const nameElement = document.createElement('div');
            nameElement.textContent = 'By ' + review.name;

            const reviewTextElement = document.createElement('div');
            reviewTextElement.textContent = review.review;

            reviewElement.appendChild(ratingElement);
            reviewElement.appendChild(nameElement);
            reviewElement.appendChild(reviewTextElement);

            reviewsContainer.appendChild(reviewElement);
        });
    }
    displayReviews(mockReviews);
});
