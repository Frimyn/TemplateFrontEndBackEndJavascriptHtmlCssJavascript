async function getData() {
    //Fetching Data from backend
    try {
      const response = await fetch('http://localhost:3000/api/data');
      const data = await response.json();
      document.getElementById('response').innerText = data.message;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function fetchDataWithParameters() {
    const parameter1 = 'value1';
    const parameter2 = 'value2';
  
    try {
      const response = await fetch(`http://localhost:3000/api/data2?param1=${parameter1}&param2=${parameter2}`);
      const data = await response.json();
      
      console.log(data); // Do something with the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  function redirectToAnotherPage() {
    // Specify the URL of the new page
    const targetPageUrl = 'another-page.html';

    // Redirect to the specified page
    window.location.href = targetPageUrl;
}
  