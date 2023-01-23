import { Stack, Box, Typography } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <Stack>
      {videos.videos.map((item, idx) => (
        <Box key={idx}> {item.id.videoId} </Box>
      ))}
    </Stack>
  );
};

export default Videos;
