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

        localStorage.setItem('user_id', data.id);
        return { success: true, message: "Registration successful!" };
    } catch (error) {
        return { success: false, message: "An error occurred while signing up." };
    }
}

export async function LoginLogic({ email, password }) {
    try {
        const response = await fetch('https://dark-sissie-wfdhammy-78750b0c.koyeb.app/user/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            return { success: false, message: data.message || "Login failed!" };
        }

        return { success: true, message: "Login successful!", token: data.token };
    } catch (error) {
        return { success: false, message: "An error occurred while logging in." };
    }
}
