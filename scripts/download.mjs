import { writeFile, mkdir } from 'fs/promises';

const OUT = 'public/photos';
await mkdir(OUT, { recursive: true });
await mkdir('public/dlc', { recursive: true });

const profile = "https://scontent.cdninstagram.com/v/t51.2885-19/344538356_3084876521821256_2234424147173765018_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=105&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=LzFGWCbI4ZoQ7kNvwEsTg3c&_nc_oc=Ado-Fbv5JFqGnOcI1oGC1l3uD9GR5yGUHW0xkfqRFN1oTRtIXiNi0sfXZRr0OUwwliQ&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=7b689&oh=00_AQJp2J3jFFbKMfAOpvpnL_k66-MpOgmqIwK_OgFAd1JjEQ&oe=6AB1DF1B";

const posts = [
  "https://scontent.cdninstagram.com/v/t51.82787-15/553688250_18032202815710315_7731453566213703747_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=BwQv4U_Bv18Q7kNvwFO5KHp&_nc_oc=Adrie9lff8JKSOrlMZvvocstQqY4_NUW5ETO5lq3MfkkJdtX1TE7DwxtKdM_25_D01c&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eFTZcXeLBumcOrcn9OsokA&_nc_ss=7b689&oh=00_AQLiMo_Kg2VD-4ZGkIs9WX5bYASMMGBwr_zYHkwA7hF5Dg&oe=6AB1BC7E",
  "https://scontent.cdninstagram.com/v/t51.82787-15/809039427_18066574943753793_5506085989503631771_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=0BiCTjoVMl8Q7kNvwF6Y3KP&_nc_oc=AdramCqdRFAkdaHR8TUDvnQ9aBS78Ct4MpfCcKxHsG96twBszL-DBYqOXaEGkR1abA0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eFTZcXeLBumcOrcn9OsokA&_nc_ss=7b689&oh=00_AQKXwhL3uS89kV3smeyV6Pag31sqJq7TXj1xBpnpE49gRg&oe=6AB1BB55",
  "https://scontent.cdninstagram.com/v/t51.82787-15/790879908_18146073598548345_6615729485720507111_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=LetAzNN18p0Q7kNvwFoTogT&_nc_oc=Adpoy3fT8a6BSHNzlgJ2SJ2FNRi4E9ZABU__AX9Cc4gEgsbpIgg77UPYw6TzH7b61xg&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eFTZcXeLBumcOrcn9OsokA&_nc_ss=7b689&oh=00_AQKMAtZG1mQ5gg7dALjYpHmMQa3A_K4kHLUIWO_zZ-8Brg&oe=6AB1E69A",
  "https://scontent.cdninstagram.com/v/t51.82787-15/791179084_18146071216548345_7464213602077235614_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=6oVwRH6VsKwQ7kNvwEJiDTA&_nc_oc=AdoKSo7DKh7b3IqfL9_Tr8zpfzl-i-Wu-7TJbXe59IDjOtMSjyMxyWJLytUoNdonvsA&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eFTZcXeLBumcOrcn9OsokA&_nc_ss=7b689&oh=00_AQLqXFndyTjQ38MyiLcOv66qgItJSuzdNOvQLk2kVtNr3Q&oe=6AB1E189",
  "https://scontent.cdninstagram.com/v/t51.82787-15/753329080_18375670663228820_326298126448339168_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=FW90iOEMSCcQ7kNvwETAA0D&_nc_oc=AdpQhxlsTZHKftizM3c8j9-JT9XOpJQwb9PnillfBUhk_covdHXpLWngfZb0DCcL6sQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eFTZcXeLBumcOrcn9OsokA&_nc_ss=7b689&oh=00_AQLLGkf3dXCQxfhPItNKF4y_s6cVIIoM7FR8TuRdnf0dDQ&oe=6AB1BBA0",
  "https://scontent.cdninstagram.com/v/t51.82787-15/732770702_18373349569228820_1004190505178302705_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=a8S8DOLEGwUQ7kNvwH7zaFq&_nc_oc=AdorZDEnJbjUpIUi7wvEzNXnjUvvn73X8wQg3XBgEvnGT1dt64lIP-LLz5Oe8Y6fb98&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eFTZcXeLBumcOrcn9OsokA&_nc_ss=7b689&oh=00_AQL44y6cuSs4CRTikPJRBHXvolwlJDPwpTwBRw7DZAlepA&oe=6AB1C631",
  "https://scontent.cdninstagram.com/v/t51.82787-15/670872157_18048162998753793_1920371205617239402_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=XRSlOdVVCcMQ7kNvwFnsvnC&_nc_oc=AdrhOMkGoUjrI3Sne_kDKNJjXJxFbiZ_a9OJGMLSOzTVBmyEhqWqYuAE6pGYJD9FLA4&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eFTZcXeLBumcOrcn9OsokA&_nc_ss=7b689&oh=00_AQJ0CIYXEviILbOs_NGZ3ICGRSzpJoKlmBKqXIDrtb-RSA&oe=6AB1B50A",
  "https://scontent.cdninstagram.com/v/t51.82787-15/700827456_18059015237710315_1887901953672896526_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=Yz9gcHtqyfwQ7kNvwGHohpE&_nc_oc=AdqygIvScqSXU0Y_qME3F0T0_NqM6u1MmlWi9prnq4KsNvLAKxTk8DTcqMWXYkcmsx4&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eFTZcXeLBumcOrcn9OsokA&_nc_ss=7b689&oh=00_AQLuQoSl7X87fHueUdWTdeGu3NIMztYoJAd9pc_PW2uqgg&oe=6AB1D7EA",
  "https://scontent.cdninstagram.com/v/t51.82787-15/671795691_18575255668063353_951749580047899514_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=o3FncohVjAkQ7kNvwHm5AZ8&_nc_oc=AdpgTBLGA8urHrUrIVcYkMEcoBv51v88obQv0_uj8s5ypDYIKkq9TPjQdPOA98bujKA&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eFTZcXeLBumcOrcn9OsokA&_nc_ss=7b689&oh=00_AQIbA3E0r8F1LPzQk43CO4ZBeN8FwomwfC-9NOWgcUsJXQ&oe=6AB1D3D8",
  "https://scontent.cdninstagram.com/v/t51.71878-15/670540239_895741020176334_1539247330226809191_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=N0Wht5jHkokQ7kNvwGHhlNu&_nc_oc=AdqJcW9QbTL_10fipwBapM8sS0gS5A_IB_GN2iVhOn218xNoVowKLC6zXb4y23L27fE&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eFTZcXeLBumcOrcn9OsokA&_nc_ss=7b689&oh=00_AQJNSmO7L56IV0PrsLrJeiRuPy8wzdGedwIuVgcZos8GaQ&oe=6AB1D22B",
  "https://scontent.cdninstagram.com/v/t51.82787-15/645818487_18049497392710315_7297061443235066735_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=4dE7iO5ehKkQ7kNvwHMictk&_nc_oc=Adr6R29wz1KLKuReNi5qUILS48URS-L86wFhVS1hN2AXMr8IXwO0h-doOheolzhX9bU&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eFTZcXeLBumcOrcn9OsokA&_nc_ss=7b689&oh=00_AQK7o4gypR6fsncIs7LCqJKKR0wUUBPGMvKA6Q-0BIN5zQ&oe=6AB1C8F2",
  "https://scontent.cdninstagram.com/v/t51.82787-15/623226801_18045700823710315_6402337507116504380_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=-1JY6K5-eCYQ7kNvwFeh6D_&_nc_oc=AdqlPN6R65E4ijhqnByKlM3G9iJ0fzPz7Km0yu6gahmnaqqslmrE6NSpdmht4SuX92k&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eFTZcXeLBumcOrcn9OsokA&_nc_ss=7b689&oh=00_AQIjUJ4jvsUj7cXc8oeOGXWRmZZupYqj1egeQPoEBuXoJA&oe=6AB1D8AF",
];

console.log('Downloading profile pic...');
const profRes = await fetch(profile);
await writeFile('public/dlc/logo.jpg', Buffer.from(await profRes.arrayBuffer()));

for (let i = 0; i < posts.length; i++) {
  const name = `p${i}.jpg`;
  console.log(`Downloading ${name}...`);
  try {
    const res = await fetch(posts[i]);
    if (!res.ok) { console.log(`  FAILED ${res.status}`); continue; }
    await writeFile(`${OUT}/${name}`, Buffer.from(await res.arrayBuffer()));
    console.log(`  OK`);
  } catch (e) { console.log(`  ERROR: ${e.message}`); }
}

console.log('Done!');
