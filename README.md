# Travel Bible 

Hey there! Welcome to the **Travel Bible** project. This is your one-stop resource for exploring awesome destinations, must-try foods, and fun places to visit in various spots around the U.S. Follow these quick instructions to get started, and feel free to customize or expand this project however you’d like.

---

## Project Overview

The **Travel Bible** is a simple web page that uses an image map of the United States. When users click on different states or locations, a popup appears with info about that region—like local foods, must-visit places, and a short summary. 

### Current Locations
- **Key West, FL**  
- **New Orleans, LA**  
- **New York, NY**  
- **Atlanta, GA**  
- **Washington, D.C.**

Here’s what’s included:
- An **HTML** file (`index.html`) containing the main structure and a Bootstrap-based layout.
- A **CSS** file (`style.css`) for styling, including positioning and popup visuals.
- A **JS** file (`logic.js`) handling the dynamic behavior of clickable map areas, popups, and info boxes.

---

## How It Works

1. **Image Map**  
   The main map is an image with clickable areas. Each area corresponds to a location on the map. When you click a region, the JavaScript file updates the displayed information in a popup.

2. **Popups**  
   Clicking on a location triggers a popup with details about that place:
   - **Location Name**  
   - **Must-Try Foods**  
   - **Places to Visit**  
   - **Summary / Description**  
   
3. **User Input Prompt**  
   - You’ll see a text prompt, something like **"Where do you want to go?"**.  
   - When a user types in a destination, that text is stored in `localStorage`, so it can persist between page reloads.


4. **Responsive**  
   The script includes logic to resize the clickable areas when the window is resized, ensuring the image map stays accurate.

---

## Getting Started

1. **Visit the Live Site**  
   - The Travel Bible is hosted on **GitHub Pages**, so you can check it out online without needing to set anything up locally. Just head to the GitHub Pages URL associated with this repository and start exploring!

2. **Local Setup (Optional)**  
   - If you prefer running things locally:
     1. Clone or download the project’s files onto your computer.
     2. Open `index.html` in your browser of choice.
     3. Done! You can now click around the map and see popups for different destinations.

---

## Requirements / Dependencies

- A modern browser that supports HTML5, CSS3, and JavaScript (Chrome, Firefox, Safari, Edge).
- **Bootstrap 5** is included via CDN in the `<head>` of the HTML file.
- A stable internet connection for external CDN resources (Bootstrap CSS/JS) if you’re running it locally.

---

## Future Improvements

- **More States & Info**: Fill up the entire U.S. with clickable areas and fun facts.
- **Mobile UX**: Optimize the design for smartphones by testing or adding more responsive features (like collapsible sections).
- **Map Zooming**: Incorporate a library or script to let users zoom and pan around the map.
- **World Map**: Incorporate more continents and places to visit
- **Weather**: Incorporate wheather in each location, and best times to visit based on weather data.

---

## Contributing

Have a fun idea or want to suggest improvements? Feel free to open an issue or pull request on the repository! All contributions to make this Travel Bible even more interesting are welcome.

---

## License

This project is shared under the MIT License, which means you can modify and distribute it freely. For more details, check out the LICENSE file.

Enjoy your trip through the **Travel Bible**—happy exploring!
