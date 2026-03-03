import MammalIcon from "./mammal.svg?react";
import BirdIcon from "./bird.svg?react";
import ReptileIcon from "./reptile.svg?react";
import AmphibianIcon from "./amphibian.svg?react";
import FishIcon from "./fish.svg?react";
import InsectIcon from "./insect.svg?react";
import ArachnidIcon from "./arachnid.svg?react";
import MolluskIcon from "./mollusk.svg?react";
import CrustaceanIcon from "./crustacean.svg?react";
import OtherIcon from "./other.svg?react";

import { PetType } from "../../../core/types/pet-type";
import React from "react";

export const PetTypeIconMap: Record<
  PetType,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  [PetType.MAMMAL]: MammalIcon,
  [PetType.BIRD]: BirdIcon,
  [PetType.REPTILE]: ReptileIcon,
  [PetType.AMPHIBIAN]: AmphibianIcon,
  [PetType.FISH]: FishIcon,
  [PetType.INSECT]: InsectIcon,
  [PetType.ARACHNID]: ArachnidIcon,
  [PetType.MOLLUSK]: MolluskIcon,
  [PetType.CRUSTACEAN]: CrustaceanIcon,
  [PetType.EXOTIC]: OtherIcon,
};
