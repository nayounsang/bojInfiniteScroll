export const MY_ID = "nayounsang1";

export const SORT = "level";

export const DIRECTION = "desc";

// export const TEST_URL = "https://api-py.vercel.app/https:~~solved.ac~api~v3~search~problem$query=%40nayounsang1&page=1&sort=level&direction=desc";

export const URL = "https://solved.ac/api/v3/search/problem";

export const TEST_URL = (page: number) =>
  `https://api-py.vercel.app/https:~~solved.ac~api~v3~search~problem$query=%40nayounsang1&page=${page}&sort=level&direction=desc`;

export const RANK: { name: string; value: string }[] = [
  { name: "Unrated", value: "" },
  { name: "Bronze", value: "V" },
  { name: "Bronze", value: "IV" },
  { name: "Bronze", value: "III" },
  { name: "Bronze", value: "II" },
  { name: "Bronze", value: "I" },
  { name: "Silver", value: "V" },
  { name: "Silver", value: "IV" },
  { name: "Silver", value: "III" },
  { name: "Silver", value: "II" },
  { name: "Silver", value: "I" },
  { name: "Gold", value: "V" },
  { name: "Gold", value: "IV" },
  { name: "Gold", value: "III" },
  { name: "Gold", value: "II" },
  { name: "Gold", value: "I" },
  { name: "Platinum", value: "V" },
  { name: "Platinum", value: "IV" },
  { name: "Platinum", value: "III" },
  { name: "Platinum", value: "II" },
  { name: "Platinum", value: "I" },
  { name: "Diamond", value: "V" },
  { name: "Diamond", value: "IV" },
  { name: "Diamond", value: "III" },
  { name: "Diamond", value: "II" },
  { name: "Diamond", value: "I" },
  { name: "Ruby", value: "V" },
  { name: "Ruby", value: "IV" },
  { name: "Ruby", value: "III" },
  { name: "Ruby", value: "II" },
  { name: "Ruby", value: "I" },
];


export const RANK_COLOR = {
  Unrated:'#000',
  Bronze:'#795548',
  Silver:'#9e9e9e',
  Gold:'#ff9800',
  Platinum:'#4caf50',
  Diamond:'#2196f3',
  Ruby:'#f44336',
}