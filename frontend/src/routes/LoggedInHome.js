import LoggedInContainer from "../containers/LoggedInContainer";

const focusCardsData = [
    {
        title: "Peaceful Piano",
        description: "Peaceful piano to help you slow down, breathe, and relax.",
        descriptionShort: "Peaceful piano to help you slow down, breath...",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with ambient and post-rock music.",
        descriptionShort: "Keep calm and focus with ambient and post-...",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002d6d48b11fd3b11da654c3519",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c",
    },
    {
        title: "Focus Flow",
        description: "Uptempo instrumental hip hop beats.",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc",
    },
    {
        title: "Workday Lounge",
        description: "Lounge and chill out music for your workday.",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618",
    },
];

const spotifyPlaylistsCardData = [
    {
        title: "Today's Top Hits",
        description: "Taylor Swift is one of the Hottest 50!",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002b3823d06a3718d5dc082e91f",
    },
    {
        title: "RapCaviar",
        description: "New music from Lil Uzi Vert, Lil Tjay and newcomer FendiDa Rappa featuring Cardi B. ",
        descriptionShort: "New music from Lil Uzi Vert, Lil Tjay and...",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002b5c6a86c3856d6246e587a14",
    },
    {
        title: "All Out of 2010s",
        description: "The biggest songs of the 2010s.",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1",
    },
    {
        title: "Rock Classics",
        description: "Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters",
        descriptionShort: "Rock legends & epic songs that continue to...",
        imgUrl: "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e",
    },
    {
        title: "Chill Hits",
        description: "Kick back to the best new and recent chill hits",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002b60db5d1bcdd9c4fd1ebcffe",
    },
];

const Home = () => {
    return (
        <LoggedInContainer curActiveScreen="home">
            <PlaylistView titleText="Focus" cardsData={focusCardsData} />
            <PlaylistView
                titleText="Spotify Playlists"
                cardsData={spotifyPlaylistsCardData}
            />
            <PlaylistView
                titleText="Sound of India"
                cardsData={focusCardsData}
            />
        </LoggedInContainer>
    );
};

const PlaylistView = ({ titleText, cardsData }) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="w-full flex justify-between space-x-4">
                {
                    // cardsData will be an array
                    cardsData.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

const Card = ({ title, description, imgUrl }) => {
    return (
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md" src={imgUrl} alt="label" />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

export default Home;