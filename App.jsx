import { useState } from "react";

export default function App() {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState([]);

  const profiles = [
    { id:1, name:"Casey", bio:"Chill energy", rating:7, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=1" },
    { id:2, name:"Morgan", bio:"Adventure seeker", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=2" },
    { id:3, name:"Alex", bio:"Loves travel", rating:10, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=3" },
    { id:4, name:"Jamie", bio:"Foodie", rating:7, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=4" },
    { id:5, name:"Taylor", bio:"Foodie", rating:6, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=5" },
    { id:6, name:"Casey", bio:"Loves travel", rating:6, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=6" },
    { id:7, name:"Drew", bio:"Gym life", rating:10, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=7" },
    { id:8, name:"Sam", bio:"Foodie", rating:5, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=8" },
    { id:9, name:"Morgan", bio:"Gym life", rating:5, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=9" },
    { id:10, name:"Chris", bio:"Chill energy", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=10" },
    { id:11, name:"Drew", bio:"Loves travel", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=11" },
    { id:12, name:"Drew", bio:"Gym life", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=12" },
    { id:13, name:"Jamie", bio:"Loves travel", rating:9, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=13" },
    { id:14, name:"Riley", bio:"Foodie", rating:9, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=14" },
    { id:15, name:"Drew", bio:"Music vibes", rating:10, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=15" },
    { id:16, name:"Riley", bio:"Foodie", rating:5, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=16" },
    { id:17, name:"Riley", bio:"Chill energy", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=17" },
    { id:18, name:"Sam", bio:"Foodie", rating:3, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=18" },
    { id:19, name:"Jamie", bio:"Foodie", rating:9, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=19" },
    { id:20, name:"Riley", bio:"Chill energy", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=20" },
    { id:21, name:"Chris", bio:"Loves travel", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=21" },
    { id:22, name:"Casey", bio:"Chill energy", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=22" },
    { id:23, name:"Jamie", bio:"Chill energy", rating:10, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=23" },
    { id:24, name:"Chris", bio:"Music vibes", rating:5, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=24" },
    { id:25, name:"Taylor", bio:"Chill energy", rating:2, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=25" },
    { id:26, name:"Chris", bio:"Chill energy", rating:9, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=26" },
    { id:27, name:"Chris", bio:"Chill energy", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=27" },
    { id:28, name:"Sam", bio:"Gym life", rating:5, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=28" },
    { id:29, name:"Taylor", bio:"Adventure seeker", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=29" },
    { id:30, name:"Alex", bio:"Foodie", rating:10, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=30" },
    { id:31, name:"Jamie", bio:"Foodie", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=31" },
    { id:32, name:"Alex", bio:"Music vibes", rating:2, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=32" },
    { id:33, name:"Jordan", bio:"Music vibes", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=33" },
    { id:34, name:"Jordan", bio:"Chill energy", rating:5, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=34" },
    { id:35, name:"Taylor", bio:"Gym life", rating:3, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=35" },
    { id:36, name:"Jordan", bio:"Foodie", rating:3, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=36" },
    { id:37, name:"Alex", bio:"Gym life", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=37" },
    { id:38, name:"Jamie", bio:"Foodie", rating:9, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=38" },
    { id:39, name:"Alex", bio:"Loves travel", rating:9, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=39" },
    { id:40, name:"Morgan", bio:"Foodie", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=40" },
    { id:41, name:"Alex", bio:"Gym life", rating:6, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=41" },
    { id:42, name:"Taylor", bio:"Music vibes", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=42" },
    { id:43, name:"Riley", bio:"Foodie", rating:2, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=43" },
    { id:44, name:"Casey", bio:"Chill energy", rating:6, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=44" },
    { id:45, name:"Alex", bio:"Music vibes", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=45" },
    { id:46, name:"Riley", bio:"Adventure seeker", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=46" },
    { id:47, name:"Alex", bio:"Loves travel", rating:6, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=47" },
    { id:48, name:"Chris", bio:"Foodie", rating:2, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=48" },
    { id:49, name:"Alex", bio:"Chill energy", rating:2, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=49" },
    { id:50, name:"Taylor", bio:"Chill energy", rating:9, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=50" },
    { id:51, name:"Jamie", bio:"Chill energy", rating:6, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=51" },
    { id:52, name:"Alex", bio:"Gym life", rating:8, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=52" },
    { id:53, name:"Morgan", bio:"Foodie", rating:7, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=53" },
    { id:54, name:"Sam", bio:"Gym life", rating:3, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=54" },
    { id:55, name:"Drew", bio:"Gym life", rating:6, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=55" },
    { id:56, name:"Jordan", bio:"Gym life", rating:7, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=56" },
    { id:57, name:"Chris", bio:"Adventure seeker", rating:3, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=57" },
    { id:58, name:"Alex", bio:"Foodie", rating:8, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=58" },
    { id:59, name:"Taylor", bio:"Music vibes", rating:2, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=59" },
    { id:60, name:"Alex", bio:"Loves travel", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=60" },
    { id:61, name:"Casey", bio:"Loves travel", rating:8, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=61" },
    { id:62, name:"Jamie", bio:"Chill energy", rating:5, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=62" },
    { id:63, name:"Casey", bio:"Music vibes", rating:5, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=63" },
    { id:64, name:"Riley", bio:"Gym life", rating:8, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=64" },
    { id:65, name:"Jordan", bio:"Chill energy", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=65" },
    { id:66, name:"Chris", bio:"Adventure seeker", rating:8, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=66" },
    { id:67, name:"Casey", bio:"Loves travel", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=67" },
    { id:68, name:"Drew", bio:"Gym life", rating:5, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=68" },
    { id:69, name:"Jordan", bio:"Foodie", rating:3, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=69" },
    { id:70, name:"Casey", bio:"Foodie", rating:6, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=70" },
    { id:71, name:"Jamie", bio:"Foodie", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=71" },
    { id:72, name:"Morgan", bio:"Gym life", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=72" },
    { id:73, name:"Morgan", bio:"Adventure seeker", rating:9, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=73" },
    { id:74, name:"Casey", bio:"Chill energy", rating:9, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=74" },
    { id:75, name:"Riley", bio:"Chill energy", rating:6, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=75" },
    { id:76, name:"Sam", bio:"Loves travel", rating:8, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=76" },
    { id:77, name:"Casey", bio:"Foodie", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=77" },
    { id:78, name:"Chris", bio:"Chill energy", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=78" },
    { id:79, name:"Jordan", bio:"Loves travel", rating:3, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=79" },
    { id:80, name:"Jamie", bio:"Chill energy", rating:2, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=80" },
    { id:81, name:"Jamie", bio:"Foodie", rating:7, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=81" },
    { id:82, name:"Jordan", bio:"Loves travel", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=82" },
    { id:83, name:"Sam", bio:"Loves travel", rating:7, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=83" },
    { id:84, name:"Morgan", bio:"Loves travel", rating:10, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=84" },
    { id:85, name:"Casey", bio:"Gym life", rating:5, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=85" },
    { id:86, name:"Taylor", bio:"Adventure seeker", rating:2, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=86" },
    { id:87, name:"Casey", bio:"Foodie", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=87" },
    { id:88, name:"Chris", bio:"Foodie", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=88" },
    { id:89, name:"Taylor", bio:"Gym life", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=89" },
    { id:90, name:"Taylor", bio:"Loves travel", rating:8, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=90" },
    { id:91, name:"Sam", bio:"Gym life", rating:9, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=91" },
    { id:92, name:"Morgan", bio:"Chill energy", rating:2, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=92" },
    { id:93, name:"Morgan", bio:"Foodie", rating:9, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=93" },
    { id:94, name:"Casey", bio:"Loves travel", rating:5, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=94" },
    { id:95, name:"Jamie", bio:"Gym life", rating:5, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=95" },
    { id:96, name:"Riley", bio:"Gym life", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=96" },
    { id:97, name:"Sam", bio:"Foodie", rating:3, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=97" },
    { id:98, name:"Jamie", bio:"Chill energy", rating:1, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=98" },
    { id:99, name:"Chris", bio:"Foodie", rating:4, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=99" },
    { id:100, name:"Drew", bio:"Chill energy", rating:5, photo:"https://api.dicebear.com/7.x/adventurer/svg?seed=100" }
  ];

  const current = profiles[index];

  const swipe = (dir) => {
    if(dir === "right") setLiked([...liked, current]);
    setIndex(index + 1);
  };

  if(index >= profiles.length) return <h2 style={padding:20}>No more profiles</h2>;

  return (
    <div style={padding:20, textAlign:"center", fontFamily:"sans-serif"}>
      <h1>SneakLinks 💘</h1>

      <div style={border:"1px solid #ccc", padding:20, borderRadius:10}>
        <img src={current.photo} width=150 />
        <h2>{current.name}</h2>
        <p>{current.bio}</p>
        <p>⭐ Rating: {current.rating} / 10</p>
      </div>

      <div style={marginTop:20}>
        <button onClick={() => swipe("left")} style={marginRight:10}>⬅️ Pass</button>
        <button onClick={() => swipe("right")}>❤️ Like</button>
      </div>

      <h3 style={marginTop:30}>Matches</h3>
      {liked.map((m,i)=>(<div key={i}>{m.name}</div>))}
    </div>
  );
}
