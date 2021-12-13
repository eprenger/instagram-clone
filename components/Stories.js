import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8
    border border-gray-200 rounded-sm overflow-x-scroll"
    >
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          username={profile.username}
        />
      ))}
      {/* stories */}
      {/* stories */}
      {/* stories */}
      {/* stories */}
    </div>
  );
}

export default Stories;
