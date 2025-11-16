# 🧪 Playwright Automation – Saucedemo Login & Cart Flow

This project automates a basic end-to-end scenario on the public demo website **https://www.saucedemo.com/** using **Playwright with JavaScript**.

## 📌 Scenario Automated
The automated test covers the following flow:

1. User logs in with valid credentials  
2. Adds one product to the cart  
3. Verifies the product name in the cart  
4. Logs out successfully  

This ensures core user journey validation for login → add to cart → verify → logout.

---

## 🛠️ Tech Stack
- **Playwright** (JavaScript)
- **Node.js**
- **VS Code** or any editor of your choice

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```
## 2️⃣ Install Dependencies
npm install

## 3️⃣ Install Playwright Browsers
npx playwright install

## ▶️ Run the Test
npx playwright test

## 🧪 Test Details
The test uses the default user credentials provided by Saucedemo:

-Username: standard_user  
-Password: secret_sauce  
## 🎞 Project Run Video


https://github.com/user-attachments/assets/b8d3721d-280d-415f-95fc-df08309949a2


The flow validates:
- Successful login
- Adding a product (e.g., Sauce Labs Backpack)
- Cart product name matches
- Logout works correctly

## 📸 Test Trace & Reports
Generate HTML report:
npx playwright show-report
<img width="1148" height="486" alt="image" src="https://github.com/user-attachments/assets/1fa29fea-6a39-49ac-9a5b-eaf348ce80a4" />


