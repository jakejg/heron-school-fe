export async function sendMessageToBackEnd(phoneNumber, message) {
 try {
  const response = await fetch('http://localhost:4000/send', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  }, 
  body: JSON.stringify({phoneNumber, message})
 })
  await response.json();

  alert("Message Sent Successfully!")
} catch (error) {
  console.log({error})
  alert("An error occurred while submitting the form.");
}
}