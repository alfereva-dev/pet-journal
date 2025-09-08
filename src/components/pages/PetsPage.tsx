import { useEffect, useState } from "react";
import type { Pet } from "../../core/models/pet.ts";
import { getPets } from "../../core/services/pet.service.ts";
import { PreviewPetDetails } from "../ui/PreviewPetDetails.tsx";
import { formatAgeLabel, formatDateDMY } from "../../features/utils/date.ts";

export function PetsPage() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    getPets("user1").then(setPets);
  }, []);
  return (
    <div id={"pets-page"} className={"pets-page"}>
      {pets.map((p) => (
        <PreviewPetDetails
          key={p.id}
          petId={p.id}
          name={p.name}
          type={p.type}
          birthday={formatDateDMY(p?.birthday)}
          gender={p.gender}
          age={formatAgeLabel(p?.birthday, p?.dateOfDeath)}
        />
      ))}
    </div>
  );
}
