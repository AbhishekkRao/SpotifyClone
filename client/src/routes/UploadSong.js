import { useState } from "react";
import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import IconText from "../components/shared/IconText";
import TextInput from "../components/shared/TextInput";
import TextWithHover from "../components/shared/TextWithHover";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";

const UploadSong = () => {
    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState();
    const navigate = useNavigate();

    const submitSong = async () => {
        const data = { name, thumbnail, track: playlistUrl };
        const response = await makeAuthenticatedPOSTRequest(
            "/song/create",
            data
        );
        if (response.err) {
            alert("Could not create song");
            return;
        }
        alert("Success");
        navigate("/home");
    };

    return (
        <LoggedInContainer curActiveScreen={'UploadSong'}>
            <div className="text-2xl font-semibold mb-5 text-white mt-8">
                Upload Your Music
            </div>
            <div className="w-2/3 flex space-x-3">
                <div className="w-1/2">
                    <TextInput
                        label="Name"
                        labelClassName={"text-white"}
                        placeholder="Name"
                        value={name}
                        setValue={setName}
                    />
                </div>
                <div className="w-1/2">
                    <TextInput
                        label="Thumbnail"
                        labelClassName={"text-white"}
                        placeholder="Thumbnail"
                        value={thumbnail}
                        setValue={setThumbnail}
                    />
                </div>
            </div>
            <div className="py-5">
                {uploadedSongFileName ? (
                    <div className="bg-white rounded-full p-3 w-1/3">
                        {uploadedSongFileName.substring(0, 35)}...
                    </div>
                ) : (
                    <CloudinaryUpload
                        setUrl={setPlaylistUrl}
                        setName={setUploadedSongFileName}
                    />
                )}
            </div>
            <div
                className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold"
                onClick={submitSong}
            >
                Submit Song
            </div>
        </LoggedInContainer>
    );
};

export default UploadSong;