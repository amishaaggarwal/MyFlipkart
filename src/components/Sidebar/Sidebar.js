import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import "./Sidebar.scss";

function Sidebar() {
  const brands = [
    "Bigil",
    "VPrime",
    "Clasikcart",
    "A-Allin1",
    "BIZBEEtech",
    "CHVTS",
    "BeeVault",
    "DAFFIN",
    "HIRDESH",
    "EZGER",
    "KHR",
    "TXGO",
    "hirdesh",
    "RUNEECH",
    "NBMRCO",
    "Dolphin",
    "TR",
    "Hi-Tech",
    "Ultra",
    "KOISTON",
    "ZMS",
    "daffin",
    "Aptivos",
    "GUARD CLUB",
    "Fovtyline",
    "PhoneBukket",
    "Pannu",
    "DB",
    "Min",
    "Hirdesh",
    "Karpine",
    "ARBAN",
    "ELEF",
    "zms",
    "SOMTONE",
    "MVNET",
    "Flipkart SmartBuy",
    "20SKY",
    "Archist",
    "Daffin",
    "WONTONS",
    "Vatsin",
    "Riptansh",
    "Raxxy",
    "Mobilive",
    "Ten To 11",
    "Mobtech",
    "Furious3D",
    "DealClues",
    "CaseTrendz",
    "Temperia",
    "IFIX",
    "HEAVIN",
    "Zootkart",
    "MBK",
    "LIKEDESIGN",
    "GALEX",
    "Emrse",
    "Tough Lee",
    "MobileZon",
    "Lensly Store",
    "Dainty",
    "DOWRVIN",
    "Clickbit",
    "Agzet",
    "96OD",
    "YMYTE",
    "Snooky",
    "Kruvln",
    "ISAAK",
    "HopShop",
    "FINCH",
    "DVS MOBILE ACCESSORIES",
    "runeech",
    "ipaky",
    "YGC",
    "Sport Look",
    "Marvelous",
    "IM Retail",
    "AUXOM",
    "S-Hardline",
    "Pasiphae",
    "MSONS",
    "DMTCHOICE",
    "DESIBUZZ",
    "CRodible",
    "Accessories Kart",
    "ARCHIST",
    "TexoVera",
    "SAEMPIRE",
    "Pubg Piro",
    "LAZZY IN HUB",
    "KITE DIGITAL",
    "GO ARBAN",
    "CELLSHEPHARD",
    "BK JAIN ACCESSORIES",
    "BHRCHR",
    "AMNR",
    "A3sprime",
    "16SM",
    "pubg piro",
    "WowSimp",
    "TRIPIX",
    "OggyBaba",
    "Msons",
    "Marshland",
    "MOBIWIN",
    "LYCOTECH",
    "Empire Accessories",
    "EASYKARTZ",
    "EASYBIZZ",
    "Casener",
    "Bechara",
    "Assault",
    "APTIVOS",
    "janx",
    "ZORAM",
    "Tuink",
    "True Desire",
    "ShopeeQ",
    "STUDOZ",
    "S-Softline",
    "S-Gripline",
    "REDDWARF",
    "RAULS",
    "Phonicz Retails",
    "PROZZILE",
    "POLENTA",
    "MudShi",
    "LIGHTWINGS",
    "Glasgow",
    "Gaxy",
    "GUARDCLUB",
    "FashionCraft",
    "FLY HIGH",
    "Desirtech",
    "CASEGURU",
    "BMahodi",
    "BE FOUND IN HUB",
    "Anaya",
    "Adiree",
    "AGZET",
    "03TRIBRID",
    "welldesign",
    "unique seller",
    "stylist sky",
    "iKare",
    "flamboyant",
    "clickbit",
    "casetrendz",
    "YOCOLOURS",
    "VORMILL",
    "Trendzcase",
    "Tiger MAX",
    "Snatchy",
    "Shell Guard",
    "Sdonthula",
    "SRT",
    "SCOMBLE",
    "Rekri",
    "Qcase",
    "Olonga",
    "ODDS",
    "Novo Style",
    "Newlike",
    "Medulla",
    "MayaBalle",
    "Matte Glass",
    "MOBILE DOCTOR",
    "MIFKRT",
    "Kyrahh",
    "Kavacha",
    "K2-TECH SQUARE",
    "JBJ",
    "Graceful",
    "Gorilion",
    "D Plus",
    "Case Trendz",
    "CallSmith",
    "Bodoma",
    "BLACKCLOUD",
    "AtoZ Accessories",
    "Aszoon Industries",
    "Akhirah",
    "Aguila",
    "ygc",
    "wolf Guru",
    "umravatiya",
    "twenteesky",
    "marshland",
    "jape",
    "iCare",
    "cellglobe",
    "caseguru",
    "ZUKON",
    "ZINJURIKI",
    "YAHKAL",
    "XAZE",
    "WOID",
    "WIDEALS",
    "VIGHNAD",
    "Urban",
    "Unread gadget",
    "Unistuff",
    "TRUSTin.ONLINE",
    "TODO DEALS",
    "Spnrs",
    "SpNrS",
    "Sosh",
    "Somapa",
    "Signature EL",
    "Sarvagya",
    "Sajni Creations",
    "STUFF Guards",
    "SPIVOZ",
    "SPERKASE",
    "SOLIVAGANT",
    "SCREENIX",
    "S9HUB",
    "S2A",
    "S Design",
    "Ringke",
    "RODIAN",
    "RAGNAR",
    "QuikDeal",
    "Pratisa",
    "PROLIKE",
    "PR SMART",
    "NV Retailers",
    "NRN Kart",
    "MOB",
    "MK",
    "MEEON",
    "MAA MANSADEVI ENTERPRISES",
    "LOOTCASE",
    "Kolorfame",
    "Khushal",
    "Jeelo",
    "Infigo",
    "Imperium",
    "INMESTA",
    "INDIAN MOBILE",
    "I THINK ENTERPRISES",
    "HIGHKY",
    "HEMPPA",
    "Gochi",
    "Go-Gone",
    "Friendskart",
    "Flp1onBuy",
    "Fitbest",
    "Far Cry",
    "FN IN HUB",
    "FLYHIGH",
    "Electrossory",
    "Ecomaholics",
    "ENOLA",
    "Discoverz",
    "DSCASE",
    "DMJHP",
    "DIgiArm",
    "DAMDAM",
    "Cover Capital",
    "Cover Alive",
    "Cospex",
    "Casetrendz",
    "Casemet",
    "Case U",
    "CLASIKCART",
    "CASENED",
    "CASEKOO",
    "BDMK",
    "Aspir",
    "Anks Online",
    "Accessories kart",
    "ATHIK",
    "ARE",
    "ARBAN ACCESSORIES",
  ];
  const customerRatings = [
    "4★ & above",
    "3★ & above",
    "2★ & above",
    "1★ & above",
  ];
  const offers = ["No Cost EMI", "Special Price", "Buy More, Save More"];
  const [filters, setFilters] = useState([]);
  const removeFilter = (val) => {
    let fil = [...filters];
    const index = fil.indexOf(val);
    if (index > -1) {
      fil.splice(index, 1); // 2nd parameter means remove one item only
    }
    setFilters(fil);
  };
  const applyFilter = (event, value) => {
    event.target.checked
      ? setFilters([...filters, value])
      : removeFilter(value);
  };
 
  return (
    <div className="sidebar">
      <div className="sidebar-heading">
        <h4>Filters</h4>
        {filters.length > 0 && (
          <Button onClick={() => setFilters([])}>CLEAR ALL</Button>
        )}
      </div>
      {filters.length > 0 && (
        <div className="chip-block">
          {filters &&
            filters.map((value, i) => (
              <Button
                variant="filled"
                key={i}
                startIcon={<CloseIcon onClick={() => removeFilter(value)} />}
                sx={{ marginRight: "5px" ,backgroundColor:"#e0e0e0"}}
              >
                {value}
              </Button>
            ))}
        </div>
      )}
      <Divider />
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              maxHeight: 300,
              overflow: "auto",
            }}
          >
            {brands.map((value) => {
              return (
                <ListItem key={value} disablePadding>
                  <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        disableRipple
                        inputProps={{ "aria-labelledby": value }}
                        onChange={(event) => applyFilter(event, value)}
                      />
                    </ListItemIcon>
                    <ListItemText primary={`${value}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Customer Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            {customerRatings.map((value) => {
              return (
                <ListItem key={value} disablePadding>
                  <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        disableRipple
                        inputProps={{ "aria-labelledby": value }}
                        onChange={(event) => applyFilter(event, value)}
                      />
                    </ListItemIcon>
                    <ListItemText primary={`${value}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Offers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            {offers.map((value) => {
              return (
                <ListItem key={value} disablePadding>
                  <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        disableRipple
                        inputProps={{ "aria-labelledby": value }}
                        onChange={(event) => applyFilter(event, value)}
                      />
                    </ListItemIcon>
                    <ListItemText primary={`${value}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Sidebar;
