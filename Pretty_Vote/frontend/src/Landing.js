import "./styles/landing.css";
import ScrollTextLand from "./components/ScrollTextLand";

const Landing = () => {
  return (
    <div className="landing" id="landing">
      <ScrollTextLand
        word={"Join our discord channel and help grow our codebase"}
      />

      <div className="land_cov">
        <div className="land_item1">
          <p className="hdy">
            The Democratic <br /> Token Built Just For <br /> a New Age.
          </p>
          <p className="suby">
            Choice Coin is an Algorand Standard Asset that powers Decentralized
            Decisions, a voting and governance software built directly on the
            Algorand Blockchain.
            <br />
            <br />
            Decentralized Decisions enables organizations to make governance
            decisions in an open and decentralized manner.
          </p>
        </div>

        <div className="land_item1">
          <p className="suby">
            For the Choice Coin DAO, Decentralized Decisions leverages
            Proof-of-Participation as a governance mechanism, allowing voters to
            have a larger say in direct proportion to their contribution to the
            network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
