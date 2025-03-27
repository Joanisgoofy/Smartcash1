export async function SignupLogic({ username, email, password }) {
    try {
        const response = await fetch('https://dark-sissie-wfdhammy-78750b0c.koyeb.app/user/v1/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            return { success: false, message: data.message || "Signup failed!" };
        }

        localStorage.setItem('user_id', data.user.id);
        localStorage.setItem('access', data.access);
        return { success: true, message: data.message };
    } catch (error) {
        return { success: false, message: "An error occurred while signing up." };
    }
}

export const LoginLogic = async ({ email, password }) => {
    try {
      const response = await fetch('login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
  
      return { success: true, token: data.token };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };


  export async function fetchBalance() {
    try {
        const walletID = localStorage.getItem('walletId');
        
        if (!walletID) {
            throw new Error('Wallet ID not found in localStorage');
        }

        const response = await fetch(
            `https://dark-sissie-wfdhammy-78750b0c.koyeb.app/wallet/v1/${walletID}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Add Authorization header if required:
                    // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch balance');
        }

        const data = await response.json();
        return data.balance; // Directly return balance (no need for `await` since data is already resolved)
        
    } catch (error) {
        console.error('Error fetching balance:', error.message);
        // Optionally rethrow to let the caller handle it
        throw error; 
    }
}

    
