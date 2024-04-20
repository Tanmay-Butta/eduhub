import React, { useState } from 'react';
import './styles.css'; // Import your CSS file
import logo from './logo.png'; // Import your logo image

function App() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        collegeName: '',
        year: '',
        gender: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your form submission logic here
        console.log(formData);
    };

    return (
        <div>
            <header>
                <div className="container">
                    <img src={logo} alt="EduHub Logo" className="logo" />
                    <h1>EduHub</h1>
                    <p>Your Study Platform for College Students</p>
                    <nav>
                        <ul>
                            <li><img src={logo} alt="EduHub Logo" className="navbar-logo" /><a href="#student-dashboard">Student Dashboard</a></li>
                            <li><a href="#mentor-dashboard">Mentor Dashboard</a></li>
                            <li><a href="#expert-dashboard">Expert Dashboard</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section id="student-dashboard">
                <div className="container">
                    <h2>Student Dashboard</h2>
                    <p>Welcome to EduHub! Please provide the following details to complete your registration:</p>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                        <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                        <input type="text" name="collegeName" placeholder="Enter your college name" value={formData.collegeName} onChange={handleChange} />
                        <input type="text" name="year" placeholder="Enter your year of study" value={formData.year} onChange={handleChange} />
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="">Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <input type="tel" name="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} />
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>Don't have an account? <a href="#subscription">Subscribe now</a>.</p>
                </div>
            </section>
            <section id="mentor-dashboard">
                <div className="container">
                    <h2>Mentor Dashboard</h2>
                    <p>Are you passionate about guiding students? Join our mentor community and share your knowledge!</p>
                    <form action="#" method="post">
                        <input type="email" name="email" placeholder="Enter your email" />
                        <input type="password" name="password" placeholder="Enter your password" />
                        <button type="submit">Sign Up</button>
                    </form>
                    
                </div>
            </section>
            <section id="expert-dashboard">
                <div className="container">
                    <h2>Expert Dashboard</h2>
                    <p>Are you an expert in your field? Join our expert panel and contribute to shaping the future of education!</p>
                    <form action="#" method="post">
                        <input type="email" name="email" placeholder="Enter your email" />
                        <input type="password" name="password" placeholder="Enter your password" />
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>Don't have an account? <a href="#subscription">Subscribe now</a>.</p>
                </div>
            </section>
            <section id="meeting">
                <div className="container">
                    <h2>Meetings</h2>
                    <p>Join live meetings and discussions with mentors and experts.</p>
                    <button>Join Meeting</button>
                </div>
            </section>
            <section id="study-materials">
                <div className="container">
                    <h2>Study Materials</h2>
                    <div className="material-category">
                        <h3>Category 1</h3>
                        <ul>
                            <li>Material 1</li>
                            <li>Material 2</li>
                            <li>Material 3</li>
                        </ul>
                    </div>
                    <div className="material-category">
                        <h3>Category 2</h3>
                        <ul>
                            <li>Material 4</li>
                            <li>Material 5</li>
                            <li>Material 6</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="subscription">
                <div className="container">
                    <h2>Subscription</h2>
                    <p>Unlock premium features and exclusive content with our subscription plans.</p>
                    <div className="plans">
                        <div className="plan">
                            <h3>Basic Plan</h3>
                            <p>Access to study materials</p>
                            <p>$9.99/month</p>
                            <button>Subscribe</button>
                        </div>
                        <div className="plan">
                            <h3>Pro Plan</h3>
                            <p>Access to study materials, mentorship, and expert advice</p>
                            <p>$19.99/month</p>
                            <button>Subscribe</button>
                        </div>
                        <div className="plan">
                            <h3>Premium Plan</h3>
                            <p>Access to study materials, mentorship, expert advice, and personalized guidance</p>
                            <p>$29.99/month</p>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <p>&copy; 2024 EduHub. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
