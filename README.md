# Neighborhood Map Project (Hot Drinks, Cool Treats!)
Neighborhood Map project for Udacity Nanodegree. Creates a map (if the user chooses) displaying popular ice cream and coffee shops throughout the South-Central Austin area.

## Installation
Open index.html to open app.

## Usage
After maps and places load, either click a **Marker** or click a place from the places list to highlight a specific place. (The map should center on the place and display an **Info Window**).

Places can be searched for in the provided search bar. The search bar searches for either category (any category associated with the place not just the displayed category from the **Info Window**) or the name itself. Searches are conducted in real time without pressing a **Submit Button** and are dynamically populated in the places list.

By default, the places list shows all places, but a **Hot Drinks** and **Cool Treats** filter can be applied to the results to further refine the search.

If using a mobile device, you must slide the places list into view via the navigation button or tapping on the **Hot Drinks, Cool Treats** header.

## Requirements
- Used Google Maps API to provide markers on maps
- Populated more than 5 locations asynchronously with data from Yelp using Fusion API (3rd Party API requirement).
- Followed the MVVM paradigm using Knockout.js.
- Active marker is animated with **BOUNCE** animation
- Info Window uses information derived from Yelp Fusion API
- A load screen is provided before map loads
- An error screen is shown if map or places do not load
- Places list responds to search and filters dynamically as well as any interaction with **Markers** on the map

## Notes
- Yelp's Fusion API is meant to be used on the server side, so this is a janky client-side implementation using a token (derived from my own API key and secret) and the cors-anywhere url to prevent the CORS error.