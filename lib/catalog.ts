/**
 * Pitch-only catalog adapter. Replace these fixtures with Nu Metro's booking
 * provider without changing consuming UI components.
 */
export type Experience = "Standard" | "VIP" | "Xtreme" | "4DX" | "ScreenX";
export type Film = { id: string; title: string; genre: string; duration: string; age: string; formats: Experience[]; synopsis: string; art: string; posterUrl?: string };
export type Showtime = { time: string; format: Experience; remainingSeats: number };
export type Seat = { id: string; status: "available" | "taken" };
export type SeatMap = { seats: Seat[]; price: number };

const films: Film[] = [
  { id: "7099", title: "Avengers: Endgame Encore", genre: "Superhero, Action, Fantasy, Sci-fi, Adventure", duration: "3h 06m", age: "13", formats: ["4DX", "VIP", "Xtreme", "Standard"], art: "lighthouse", synopsis: "Avengers: Endgame Encore is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7099-1-3-3-1788428023.jpg" },
  { id: "7096", title: "Dune: Part Three", genre: "Action, Adventure, Drama, Sci-fi, Thriller", duration: "TBC", age: "TBC", formats: ["Standard"], art: "flame", synopsis: "Dune: Part Three is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7096-1-1-3-1784747948.jpg" },
  { id: "7104", title: "Verity", genre: "Thriller", duration: "1h 56m", age: "18", formats: ["VIP", "Standard"], art: "sunbird", synopsis: "Verity is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7104-1-2-3-1789047309.jpg" },
  { id: "7128", title: "BTS World Tour Arirang in Buenos Aires: Live Viewing", genre: "Performance, Music", duration: "3h 15m", age: "10–12PG", formats: ["Xtreme", "Standard"], art: "neon", synopsis: "BTS World Tour Arirang in Buenos Aires: Live Viewing is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7128-1-2-3-1789543927.jpg" },
  { id: "7129", title: "BTS World Tour Arirang in São Paulo: Live Viewing", genre: "Performance, Music", duration: "3h 15m", age: "10–12PG", formats: ["Xtreme", "Standard"], art: "grand", synopsis: "BTS World Tour Arirang in São Paulo: Live Viewing is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7129-1-2-3-1789543802.jpg" },
  { id: "7110", title: "Tony", genre: "Drama, Comedy", duration: "TBC", age: "TBC", formats: ["VIP", "Standard"], art: "salt", synopsis: "Tony is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7110-1-1-3-1789555023.jpg" },
  { id: "7101", title: "Forgotten Island", genre: "Animated, Adventure", duration: "1h 49m", age: "PG", formats: ["Standard"], art: "lighthouse", synopsis: "Forgotten Island is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7101-1-1-3-1786434144.jpg" },
  { id: "7078", title: "Insidious: Out of the Further", genre: "Horror", duration: "1h 46m", age: "16", formats: ["Standard"], art: "flame", synopsis: "Insidious: Out of the Further is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7078-1-1-3-1782379865.jpg" },
  { id: "7103", title: "Shaun the Sheep: The Beast of Mossy Bottom", genre: "Animated", duration: "1h 21m", age: "PG", formats: ["Standard"], art: "sunbird", synopsis: "Shaun the Sheep: The Beast of Mossy Bottom is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7103-1-1-3-1788444253.jpg" },
  { id: "7102", title: "Heart of the Beast", genre: "Action, Adventure, Drama, Thriller", duration: "1h 42m", age: "13", formats: ["VIP", "Standard"], art: "neon", synopsis: "Heart of the Beast is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7102-1-1-3-1788175064.jpg" },
  { id: "7094", title: "The Uprising", genre: "Drama, Action", duration: "TBC", age: "TBC", formats: ["Standard"], art: "grand", synopsis: "The Uprising is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7094-1-2-3-1788353866.jpg" },
  { id: "7093", title: "Silas en die Ysbeer op Tafelberg", genre: "Drama", duration: "1h 22m", age: "7–9PG", formats: ["Standard"], art: "salt", synopsis: "Silas en die Ysbeer op Tafelberg is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7093-1-1-3-1784292496.jpg" },
  { id: "7098", title: "Sacrifice", genre: "Action, Adventure", duration: "1h 40m", age: "16", formats: ["Standard"], art: "lighthouse", synopsis: "Sacrifice is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7098-1-1-3-1788353552.jpg" },
  { id: "7126", title: "The Vvaan - Force of the Forrest", genre: "Action, Fantasy", duration: "2h 10m", age: "16", formats: ["Standard"], art: "flame", synopsis: "The Vvaan - Force of the Forrest is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7126-1-1-3-1789389706.jpg" },
  { id: "5995", title: "Coyote vs. Acme", genre: "Action, Adventure, Animated, Comedy, Family", duration: "1h 41m", age: "PG", formats: ["Standard"], art: "sunbird", synopsis: "Coyote vs. Acme is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/5995-1-1-3-1787729364.jpg" },
  { id: "7045", title: "The Odyssey", genre: "Action, Fantasy", duration: "2h 53m", age: "16", formats: ["Standard"], art: "neon", synopsis: "The Odyssey is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7045-1-1-3-1777904391.jpg" },
  { id: "7100", title: "Resident Evil", genre: "Action, Horror, Sci-fi", duration: "1h 36m", age: "16", formats: ["VIP", "Standard"], art: "grand", synopsis: "Resident Evil is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7100-1-1-3-1786434892.jpg" },
  { id: "7025", title: "Spider-Man: Brand New Day", genre: "Action, Adventure, Fantasy, Sci-fi", duration: "2h 25m", age: "13", formats: ["VIP", "Standard"], art: "salt", synopsis: "Spider-Man: Brand New Day is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7025-1-2-3-1781765591.jpg" },
  { id: "7097", title: "Digger", genre: "Comedy, Drama", duration: "2h 08m", age: "16", formats: ["VIP", "Standard"], art: "lighthouse", synopsis: "Digger is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7097-1-2-3-1790687746.jpg" },
  { id: "7095", title: "Avengers: Doomsday", genre: "Action, Adventure, Sci-fi", duration: "2h 46m", age: "TBC", formats: ["4DX", "VIP", "Xtreme", "Standard"], art: "flame", synopsis: "Avengers: Doomsday is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7095-1-1-3-1784556765.jpg" },
  { id: "7109", title: "Just Play Dead", genre: "Thriller", duration: "1h 36m", age: "16", formats: ["Standard"], art: "sunbird", synopsis: "Just Play Dead is currently listed at Nu Metro.", posterUrl: "https://numetro.co.za/wp-content/uploads/movies_images/poster/7109-1-1-3-1788872902.jpg" }
];
const prices: Record<Experience, number> = { Standard: 89, VIP: 159, Xtreme: 139, "4DX": 179, ScreenX: 149 };
const times = ["12:40", "15:20", "18:05", "20:50"];

export async function getFilms(): Promise<Film[]> { return films; }
export async function getShowtimes(filmId: string, _cinema: string, _day: string): Promise<Showtime[]> {
  const film = films.find((item) => item.id === filmId);
  if (!film) return [];
  return times.map((time, index) => ({ time, format: film.formats[index % film.formats.length], remainingSeats: (filmId.length * 7 + index * 11) % 34 + 3 }));
}
export async function getSeatMap(filmId: string, time: string, format: Experience): Promise<SeatMap> {
  const seed = Array.from(`${filmId}-${time}`).reduce((total, character) => total + character.charCodeAt(0), 0);
  const seats: Seat[] = [];
  Array.from("ABCDEF").forEach((row, rowIndex) => Array.from({ length: 10 }, (_, index) => {
    seats.push({ id: `${row}${index + 1}`, status: ((seed + rowIndex * 13 + index * 7) % 9 < 3 ? "taken" : "available") });
  }));
  return { seats, price: prices[format] };
}
export const cinemas = ["Bedford", "Clearwater", "The Glen", "Hyde Park", "Loch Logan", "Menlyn Park", "The Pavilion", "Canal Walk", "Mountain Mill", "Boardwalk (Gqeberha)", "Galleria", "Emperors Palace", "Woodlands", "Ballito Junction", "Cornubia", "Westgate (Roodepoort)", "Gateway", "Cavendish Square", "Riverside (Mbombela)"];
