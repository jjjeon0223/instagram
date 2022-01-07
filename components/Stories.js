import { useSession } from "next-auth/react";
import faker from "faker";
import { useState, useEffect } from "react";
import Story from "./Story";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();
  console.log(session);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session?.user.image} username={session?.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={`https://i.pravatar.cc/150?img=${profile.id}`}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
