
const stripeOnramp = Stripe("pk_test_xI0MP3X5DgHXeRF6AYUGip83");
// initialize();
      // Function to fetch client secret from server
      async function fetchClientSecret() {
        try {
          const response = await fetch('https://api.stripe.com/v1/crypto/onramp_sessions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any necessary headers like authorization if required
            },
            // Add any necessary request body
            // body: JSON.stringify({}) 
          });

          const data = await response.json();
          return data.client_secret;
        } catch (error) {
          console.error('Error fetching client secret:', error);
          // Handle error appropriately
        }
      }

      // Initialize onramp element with client secret
      export async function initializeOnramp() {
        const clientSecret = await fetchClientSecret();
        const onrampSession = stripeOnramp.createSession({ clientSecret });
        onrampSession.mount("#onramp-element");
        console.log(clientSecret)
      }

      initializeOnramp();
    