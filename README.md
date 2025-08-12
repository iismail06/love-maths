# Love Maths

A fun and interactive math game to help improve arithmetic skills across four different operations.

🎮 **[Play the Game Live](https://iismail06.github.io/love-maths/)** 🎮

## Description

Love Maths is an educational web application designed to make learning mathematics enjoyable. The game challenges users with arithmetic problems in addition, subtraction, multiplication, and division, helping them practice their mental math skills in an engaging way with real-time feedback and score tracking.

## Features

- **Four Math Operations**: Addition, Subtraction, Multiplication, and Division
- **Interactive Game Buttons**: Color-coded buttons with FontAwesome icons for each operation
- **Real-time Feedback**: Instant alerts for correct and incorrect answers
- **Score Tracking**: Live tracking of correct and incorrect answers
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens
- **Keyboard Support**: Press Enter to submit answers for faster gameplay
- **Auto-focus Input**: Input field automatically focuses after each question
- **Smart Question Generation**:
  - Subtraction ensures no negative results
  - Division ensures whole number results
  - Random numbers between 1-25 for manageable calculations
- **Visual Feedback**: Color-coded buttons (Green for addition, Blue for subtraction, Orange for multiplication, Red for division)

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Responsive design with media queries for mobile-first approach
- **JavaScript (ES6+)**: Game logic, DOM manipulation, and event handling
- **FontAwesome**: Mathematical operation icons
- **Google Fonts**: Raleway and Righteous font families

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No installation required - runs directly in the browser

### How to Access

#### Option 1: Play Online

- Visit the live version: [https://iismail06.github.io/love-maths/](https://iismail06.github.io/love-maths/)

### Option 2: Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/iismail06/love-maths.git
   ```

2. Navigate to the project directory:

   ```bash
   cd love-maths
   ```

3. Open `index.html` in your web browser to start playing.

## How to Play

1. **Choose an Operation**: Click one of the four colored buttons:
   - 🟢 **Green (+)**: Addition problems
   - 🔵 **Blue (−)**: Subtraction problems  
   - 🟠 **Orange (×)**: Multiplication problems
   - 🔴 **Red (÷)**: Division problems

2. **Solve the Problem**: A random math problem will appear in the question area

3. **Enter Your Answer**: Type your answer in the input box

4. **Submit**: Click "Submit Answer" or press Enter

5. **Track Your Progress**: Watch your correct and incorrect answer counts update

6. **Continue Playing**: The game automatically generates a new question of the same type after each answer

## Wireframes

The Love Maths game follows a clean, intuitive layout designed for optimal user experience across all devices.

### Desktop Layout

```text
┌─────────────────────────────────────────────────────────────┐
│                     Love Maths                             │
│                    [LOGO] Title                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│         ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐                │
│         │  +  │  │  -  │  │  ×  │  │  ÷  │                │
│         └─────┘  └─────┘  └─────┘  └─────┘                │
│                                                             │
│                    12  +  8  =                             │
│                                                             │
│                  Enter Answer:                              │
│                  ┌───────────┐                             │
│                  │           │                             │
│                  └───────────┘                             │
│                                                             │
│                ┌─────────────────┐                         │
│                │  Submit Answer  │                         │
│                └─────────────────┘                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│         Correct: 5           Incorrect: 2                  │
└─────────────────────────────────────────────────────────────┘

### Mobile Layout
┌─────────────────────┐
│    Love Maths       │
│   [LOGO] Title      │
├─────────────────────┤
│                     │
│    ┌───┐  ┌───┐     │
│    │ + │  │ - │     │
│    └───┘  └───┘     │
│    ┌───┐  ┌───┐     │
│    │ × │  │ ÷ │     │
│    └───┘  └───┘     │
│                     │
│      5  +  3  =     │
│                     │
│   Enter Answer:     │
│   ┌─────────────┐   │
│   │             │   │
│   └─────────────┘   │
│                     │
│  ┌───────────────┐  │
│  │ Submit Answer │  │
│  └───────────────┘  │
│                     │
├─────────────────────┤
│   Correct: 3        │
│   Incorrect: 1      │
└─────────────────────┘

### Key Design Elements

- **Header**: Logo and title prominently displayed
- **Control Area**: Four operation buttons in a grid layout
- **Question Area**: Large, clear display of the math problem
- **Input Section**: Labeled input field with submit button
- **Score Area**: Live tracking of correct and incorrect answers
- **Responsive**: Adapts seamlessly between desktop and mobile layouts

## Project Structure

love-maths/
├── index.html          # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css   # Responsive styles and media queries
│   ├── js/
│   │   └── script.js   # Game logic and DOM manipulation
│   └── images/         # Game images and assets
├── README.md           # This file

## Responsive Design

The game is optimized for all screen sizes:

- **Mobile (320px+)**: Smaller buttons, stacked layout
- **Tablet (768px+)**: Medium-sized interface
- **Desktop (1200px+)**: Full-sized buttons and optimal spacing

## Contributing

Contributions are welcome! If you'd like to contribute to Love Maths:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions

- Add more difficulty levels
- Implement timer functionality
- Add sound effects
- Create different game modes
- Improve accessibility features

## Future Enhancements

- [ ] Timer mode for speed challenges
- [ ] High score persistence with localStorage
- [ ] Sound effects for correct/incorrect answers
- [ ] Animations for better user experience
- [ ] Multiple difficulty levels (easy, medium, hard)
- [ ] Statistics dashboard showing performance over time

## Browser Compatibility

Love Maths is compatible with all modern browsers:

- Chrome 60+
- Firefox 55+
- Safari 12+


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Code Institute**: For the project inspiration and educational guidance
- **FontAwesome**: For the mathematical operation icons
- **Google Fonts**: For the beautiful Raleway and Righteous font families
- **Community**: Thanks to all contributors who help improve this educational tool

## Author

Created with  by Idil Ismail

---

## Happy Learning! 🧮✨
