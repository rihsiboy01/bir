document.getElementById('nameForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value.toLowerCase();

    if (name === 'rihsiboy') {
        document.getElementById('result').innerText = 'Geniy bola';
    } else {
        try {
            const response = await fetch(`https://api.nationalize.io?name=${name}`);
            const data = await response.json();

            if (data.country.length > 0) {
                const country = data.country[0].country_id;
                document.getElementById('result').innerText = `Millat: ${country}`;
            } else {
                document.getElementById('result').innerText = 'Millat topilmadi';
            }
        } catch (error) {
            document.getElementById('result').innerText = 'Xatolik yuz berdi';
        }
    }
});

