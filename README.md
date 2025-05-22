# Developer Portfolio Website

A modern full-stack portfolio website built to showcase my work, skills, and contact information as a new software developer.

## 🔧 Tech Stack

### Frontend
- [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
- [TailwindCSS](https://tailwindcss.com/) for utility-first styling
- [ShadCN UI](https://ui.shadcn.dev/) for accessible and elegant components
- [Framer Motion](https://www.framer.com/motion/) for smooth UI animations
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for form handling and validation

### Backend
- [Spring Boot](https://spring.io/projects/spring-boot) for building the API
- [Spring Security](https://spring.io/projects/spring-security) for securing routes
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa) for database interaction
- [PostgreSQL](https://www.postgresql.org/) as the relational database
- [Lombok](https://projectlombok.org/) to reduce boilerplate code
- [Swagger UI](https://swagger.io/tools/swagger-ui/) via springdoc-openapi for API documentation

## 📁 Project Structure

```
portfolio/
├── frontend/       # React + Vite + TailwindCSS + ShadCN UI
└── backend/        # Java Spring Boot + PostgreSQL
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Java 17+
- PostgreSQL running locally or hosted
- Maven

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
./mvnw spring-boot:run
```

> ⚙️ Configure your DB credentials in `backend/src/main/resources/application.properties`:
>
> ```properties
> spring.datasource.url=jdbc:postgresql://localhost:5432/portfolio_db
> spring.datasource.username=your_username
> spring.datasource.password=your_password
> ```

## 🌗 Features

- 🔄 Dark/light mode toggle
- 📱 Mobile responsive layout
- 💼 Interactive project showcase with GitHub/live demo links
- 📬 Contact form with validation
- 📄 Swagger UI for API documentation
- 🎯 Clean, minimal, and modern aesthetic

## 📸 Screenshots

> *(To be added once UI is implemented)*

## 📬 Contact

Feel free to connect with me via:
- [LinkedIn](https://linkedin.com)
- [GitHub](https://github.com/your-username)
- Or send a message through the contact form on the site

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---
