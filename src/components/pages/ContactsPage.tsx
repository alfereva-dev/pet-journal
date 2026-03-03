import { type ReactNode, useEffect, useMemo, useState } from "react";
import { getPets } from "../../core/services/pet.service.ts";
import type { Pet } from "../../core/models/pet.ts";
import {
  flattenGroomers,
  flattenOtherContacts,
  flattenVets,
  selectEmergencyVets,
} from "../../features/selectors/pet.selectors.ts";
import { Infobox } from "../ui/Infobox.tsx";

const val = (id: string, content?: ReactNode | null) =>
  content === undefined || content === null || content === ""
    ? null
    : { id, content };

const notNull = <T,>(x: T | null | undefined): x is T =>
  x !== null && x !== undefined;

export function ContactsPage() {
  const [pets, setPets] = useState<Pet[]>([]);
  useEffect(() => {
    getPets("user1").then(setPets);
  }, []);

  const allEmergencyVets = useMemo(() => selectEmergencyVets(pets), [pets]);
  const allVets = useMemo(() => flattenVets(pets), [pets]);
  const allGroomer = useMemo(() => flattenGroomers(pets), [pets]);
  const allOther = useMemo(() => flattenOtherContacts(pets), [pets]);

  return (
    <div id={"contacts-page"}>
      <div id={"all-emergency-contacts"} className={"display-flex flex-column"}>
        <Infobox
          title="PET_INFO.emergency_contacts"
          classNameInfobox={"shadow-1"}
          showCopy
          items={
            allEmergencyVets.length
              ? allEmergencyVets.map((v) => ({
                  id: `emg-${v.id}`,
                  label: `${v.name} — ${v.petName}`,
                  value: [
                    val(`tel-${v.id}`, v.telephone),
                    val(`mail-${v.id}`, v.email),
                    val(`g-${v.id}-web`, v.website),
                    val(`addr-${v.id}`, v.address),
                  ].filter(notNull),
                  copyText:
                    v.telephone ?? v.email ?? v.website ?? v.address ?? "",
                  showCopy: true,
                }))
              : [
                  {
                    id: "none",
                    label: "PET_INFO.not_specified",
                    value: [],
                  },
                ]
          }
        />
        <Infobox
          title="PET_INFO.all_vet_contacts"
          showCopy
          classNameInfobox={"shadow-1"}
          items={
            allVets.length
              ? allVets.map((v) => ({
                  id: `vc-${v.id}`,
                  label: `${v.name} - ${v.petName}`,
                  value: [
                    val(`tel-${v.id}`, v.telephone),
                    val(`mail-${v.id}`, v.email),
                    val(`g-${v.id}-web`, v.website),
                    val(`addr-${v.id}`, v.address),
                  ].filter(notNull),
                  copyText:
                    v.telephone ?? v.email ?? v.website ?? v.address ?? "",
                  showCopy: true,
                }))
              : []
          }
        />
        <Infobox
          title="PET_INFO.all_groomer_contacts"
          showCopy
          classNameInfobox={"shadow-1"}
          items={
            allGroomer.length
              ? allGroomer.map((g) => ({
                  id: `groomer-${g.id}`,
                  label: `${g.name} - ${g.petName}`,
                  value: [
                    val(`tel-${g.id}`, g.telephone),
                    val(`mail-${g.id}`, g.email),
                    val(`g-${g.id}-web`, g.website),
                    val(`addr-${g.id}`, g.address),
                  ].filter(notNull),
                  copyText:
                    g.telephone ?? g.email ?? g.website ?? g.address ?? "",
                  showCopy: true,
                }))
              : []
          }
        />
        <Infobox
          title="PET_INFO.all_other_contacts"
          showCopy
          classNameInfobox={"shadow-1"}
          items={
            allOther.length
              ? allOther.map((g) => ({
                  id: `oth-con-${g.id}`,
                  label: `${g.name} - ${g.petName}`,
                  value: [
                    val(`tel-${g.id}`, g.telephone),
                    val(`mail-${g.id}`, g.email),
                    val(`g-${g.id}-web`, g.website),
                    val(`addr-${g.id}`, g.address),
                  ].filter(notNull),
                  copyText:
                    g.telephone ?? g.email ?? g.website ?? g.address ?? "",
                  showCopy: true,
                }))
              : []
          }
        />
      </div>
    </div>
  );
}
