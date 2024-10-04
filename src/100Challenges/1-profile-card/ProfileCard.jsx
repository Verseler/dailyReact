import styled from "styled-components";
import FacebookIcon from "./assets/facebook.png";
import LinkedinIcon from "./assets/linkedin.png";
import TwitterIcon from "./assets/twitter.png";
import YoutubeIcon from "./assets/youtube.png";
import InstagramIcon from "./assets/instagram.png";
import HeaderBackgroundImage from "./assets/wave.svg";

export default function ProfileCard() {
  return (
    <Card>
      <CardHeader>
        <Avatar>
          <AvatarImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2I5r8gOD-nVet5m7AGZC6HQgvvHO14aSxJQ&s"
            alt="user profile image"
          />
        </Avatar>
        <HeaderBackground src={HeaderBackgroundImage} />
      </CardHeader>
      <CardContent>
        <Name>Johnny Rogers</Name>
        <Email>@jonnyrogers</Email>
        <SocialMediaGroup>
          <SocialMedia src={FacebookIcon} />
          <SocialMedia src={LinkedinIcon} />
          <SocialMedia src={TwitterIcon} />
          <SocialMedia src={InstagramIcon} />
          <SocialMedia src={YoutubeIcon} />
        </SocialMediaGroup>
        <Description>
          Crafting brand and communications strategies, creating visual designs,
          leading art direction, and capturing portraits through photography.
        </Description>
        <ButtonsWrapper>
          <Button>Follow</Button>
          <Button $outline>Message</Button>
        </ButtonsWrapper>
      </CardContent>
    </Card>
  );
}

const Card = styled.div`
  min-height: 29rem;
  width: 20rem;
  border-radius: 2.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 14px 0px;
`;

const CardHeader = styled.div`
  position: relative;
  height: 11rem;
  width: 100%;
  border-radius: 2.5rem 2.5rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  overflow: hidden;
`;

const HeaderBackground = styled.img`
  height: 150%;
  width: 100%;
  object-fit: cover;
  object-position: 30%;
`;

const Avatar = styled.div`
  position: absolute;
  z-idex: 10;
  top: 20px;
  height: 5.5rem;
  width: 5.5rem;
  border-radius: 100%;
  background-color: blue;
  overflow: hidden;
`;

const AvatarImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  text-align: center;
  padding: 1rem;
`;

const Name = styled.span`
  text-color: black;
  font-size: 1.5rem;
  font-weight: 600;
  display: block;
`;

const Email = styled.span`
  color: #808080;
  font-size: 0.75rem;
  font-weight: 500;
  display: block;
`;

const SocialMediaGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.5em;
  margin: 1.5rem 0 1.2rem;
`;

const SocialMedia = styled.img`
  height: 1rem;
  width: 1rem;
`;

const Description = styled.p`
  color: black;
  font-size: 0.8rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  column-gap: 0.5em;
  margin-top: 2.5rem;
`;

const Button = styled.button((props) => ({
  backgroundColor: props.$outline ? "transparent" : "#DF408C",
  borderWidth: props.$outline ? 1 : 0,
  borderColor: props.$outline ? "#808080" : "white",
  color: props.$outline ? "#808080" : "white",
  fontSize: "0.8rem",
  borderRadius: "1.5em",
  padding: "0.5em 1.5em",
  width: "7rem",
  "&:hover": {
    opacity: 0.9,
  },
}));
