import ProfileCard from "./100Challenges/1-profile-card/ProfileCard";
import styled from "styled-components";

const Center = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Center>
      <ProfileCard />
    </Center>
  );
}

export default App;
