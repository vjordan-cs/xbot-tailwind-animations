export async function fetchHuemintPalette(): Promise<string[]> {
    const jsonData = {
      mode: "transformer",
      num_colors: 6,
      temperature: "1.2",
      num_results: 1,
      adjacency: [
        "0", "65", "45", "35", "25", "15", 
        "65", "0", "35", "65", "45", "25", 
        "45", "35", "0", "35", "65", "45", 
        "35", "65", "35", "0", "35", "65", 
        "25", "45", "65", "35", "0", "35", 
        "15", "25", "45", "65", "35", "0"
      ],
      palette: ["-", "-", "-", "-", "-", "-"],
    };
  
    const response = await fetch("https://api.huemint.com/color", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(jsonData),
    });
  
    const data = await response.json();
    return data.results[0].palette;
  }
  