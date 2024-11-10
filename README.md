# Personal Portfolio Website


## 🌟 Features

- **Responsive Design**: Adapts seamlessly to all device sizes
- **Interactive UI**: Smooth transitions and animations
- **Multiple Sections**:
  - About Me
  - Resume/Experience
  - Projects Portfolio
  - Community Impact
  - Contact Form
- **Dark Mode**: Eye-friendly dark theme
- **Project Filtering**: Easy navigation through different project categories
- **Contact Form Integration**: Using Formspree for message handling
- **Interactive Maps**: Location integration with Google Maps

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript
- [Ion Icons](https://ionic.io/ionicons) for iconography
- [Formspree](https://formspree.io) for form handling
- Google Maps API

## 📂 Project Structure

```
portfolio/
├── assets/
│   ├── images/
│   │   ├── my-avatar.png
│   │   └── project-images/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── index.html
└── README.md
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Navigate to project directory:
```bash
cd portfolio
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8080
```

4. For contact form functionality:
   - Sign up at [Formspree](https://formspree.io)
   - Replace `YOUR_FORM_ID` in the contact form action URL

## ⚙️ Configuration

### Contact Form
The contact form is configured using Formspree. To set it up:
1. Create an account at Formspree
2. Create a new form
3. Replace the form action URL in `index.html`
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Google Maps
To update the location:
1. Go to Google Maps
2. Find your location
3. Click "Share"
4. Select "Embed a map"
5. Copy the iframe code
6. Replace the existing iframe in the contact section

## 🔧 Customization


## 📄 License
[MIT License](LICENSE.md)

## 🤝 Contributing
Feel free to fork this repository and submit pull requests for any improvements.

## 📞 Contact
For any queries or suggestions, please reach out through the contact form on the website.
