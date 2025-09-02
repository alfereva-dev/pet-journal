import { useParams } from "react-router-dom";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import type { Pet } from "../../core/models/pet";
import { getPet } from "../../core/services/pet.service";
import { PetTypeIconMap } from "../../assets/icons/pet-type/map";
import { PetType } from "../../core/types/pet-type";
import { Infobox } from "./Infobox";

const val = (id: string, content?: ReactNode | null) =>
  content === undefined || content === null || content === ""
    ? null
    : { id, content };

const notNull = <T,>(x: T | null | undefined): x is T =>
  x !== null && x !== undefined;

export function PetDetails() {
  const { id } = useParams<{ id: string }>();
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    getPet("user1", id)
      .then(setPet)
      .finally(() => setLoading(false));
  }, [id]);

  const Icon = PetTypeIconMap[pet?.type ?? PetType.EXOTIC];

  if (loading) {
    return (
      <div id="pet-details" className="primary-box shadow-1">
        Loading...
      </div>
    );
  }

  return (
    <div id="pet-details" className="primary-box shadow-1">
      <div className="pet-details-page">
        <div className="pet-details-mini-box">
          <div className="avatar primary-box" aria-hidden>
            {pet?.photo ? (
              <img
                src={pet.photo}
                alt={`${pet.name} avatar`}
                width={64}
                height={64}
                style={{
                  width: 64,
                  height: 64,
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <Icon width={64} height={64} />
            )}
          </div>
          <div id="base-info">
            <Infobox
              className="infobox-grid"
              showCopy={false}
              items={[
                {
                  id: "base-name",
                  label: "PET_INFO.name",
                  value: [val("base-name-v", pet?.name)].filter(notNull),
                },
                {
                  id: "base-birthday",
                  label: "PET_INFO.birthday",
                  value: [val("base-birthday-v", pet?.birthday)].filter(
                    notNull,
                  ),
                },
                {
                  id: "base-gender",
                  label: "PET_INFO.gender",
                  value: [val("base-gender-v", pet?.gender)].filter(notNull),
                },
                {
                  id: "base-age",
                  label: "PET_INFO.age",
                  value: [val("base-age-v", pet?.age?.toString())].filter(
                    notNull,
                  ),
                },
                {
                  id: "base-status",
                  label: "PET_INFO.status",
                  value: [val("base-status-v", pet?.status?.toString())].filter(
                    notNull,
                  ),
                },
              ]}
            />
          </div>
        </div>
        <div id="important-info" className="display-flex">
          <Infobox
            title="PET_INFO.pet_identification"
            className={"width-100"}
            items={[
              {
                id: "pid-passport",
                label: "PET_INFO.passport",
                value: [val("pid-passport-v", pet?.passport)].filter(notNull),
                copyText: pet?.passport ?? "",
              },
              {
                id: "pid-chip",
                label: "PET_INFO.chip",
                value: [val("pid-chip-v", pet?.chip)].filter(notNull),
                copyText: pet?.chip ?? "",
              },
              {
                id: "pid-insurance",
                label: "PET_INFO.insurance",
                value: [
                  val(
                    "pid-insurance-v",
                    pet?.insurances
                      ?.map((i) => i.policyNumber)
                      .filter(Boolean)
                      .join(", "),
                  ),
                ].filter(notNull),
              },
            ]}
          />

          <Infobox
            title="PET_INFO.emergency_contacts"
            className={"width-100"}
            showCopy={true}
            items={
              pet?.vets
                ?.filter((v) => v.emergency)
                .map((v) => ({
                  id: `emg-vet-${v.id}`,
                  label: v.name,
                  value: [val(`emg-vet-${v.id}-tel`, v.telephone)].filter(
                    notNull,
                  ),
                  copyText: v.telephone ?? "",
                  showCopy: true,
                })) ?? [
                {
                  id: "not_specified",
                  label: "PET_INFO.not_specified",
                  value: [],
                },
              ]
            }
          />
        </div>
        <div id="other-info" className={"infobox-other-info"}>
          <Infobox
            title="PET_INFO.contacts"
            showAction={true}
            showCopy={true}
            items={[
              ...(pet?.vets?.map((v) => ({
                id: `vet-${v.id}`,
                label: v.name,
                value: [
                  val(`vet-${v.id}-tel`, v.telephone),
                  val(`vet-${v.id}-mail`, v.email),
                  val(`g-${v.id}-web`, v.website),
                  val(`vet-${v.id}-addr`, v.address),
                ].filter(notNull),
                copyText: v.telephone ?? v.email ?? v.website ?? "",
                showCopy: true,
              })) ?? []),
              ...(pet?.groomers?.map((g) => ({
                id: `groomer-${g.id}`,
                label: g.name ?? "Groomer",
                value: [
                  val(`g-${g.id}-tel`, g.telephone),
                  val(`g-${g.id}-mail`, g.email),
                  val(`g-${g.id}-web`, g.website),
                  val(`g-${g.id}-addr`, g.address),
                ].filter(notNull),
                copyText: g.telephone ?? g.email ?? g.website ?? "",
                showCopy: true,
              })) ?? [
                {
                  id: "not_specified",
                  label: "PET_INFO.not_specified",
                  value: [],
                },
              ]),
            ]}
          />
          <Infobox
            title={"PET_INFO.feeding"}
            showAction={true}
            showCopy={false}
            items={
              pet?.feedings?.map((f) => ({
                id: f.id,
                label: f.foodName ?? "Feed",
                value: [
                  val(`f-${f.id}-type`, f.type),
                  val(`f-${f.id}-brand`, f.brand),
                  val(`f-${f.id}-amount`, `${f.amount} ${f.unit}`),
                ].filter(notNull),
              })) ?? [
                {
                  id: "not_specified",
                  label: "PET_INFO.not_specified",
                  value: [],
                },
              ]
            }
          />
          <Infobox
            title={"PET_INFO.treatment"}
            showAction={true}
            showCopy={false}
            items={
              pet?.treatments?.map((t) => ({
                id: t.id,
                label: t.name ?? "Treatment",
                value: [
                  val(`f-${t.id}-type`, t.type),
                  val(`f-${t.id}-dosage`, t.dosage),
                  val(`f-${t.id}-date`, `${t.startDate}-${t.endDate ?? ""}`),
                ].filter(notNull),
              })) ?? [
                {
                  id: "not_specified",
                  label: "PET_INFO.not_specified",
                  value: [],
                },
              ]
            }
          />
          <Infobox
            title={"PET_INFO.vaccination"}
            showAction={true}
            showCopy={false}
            items={
              pet?.vaccination?.map((v) => ({
                id: v.id,
                label: v.name ?? "Vaccination",
                value: [
                  val(`f-${v.id}-batch`, v.batchNumber),
                  val(`f-${v.id}-performed`, v.performedBy),
                  val(`f-${v.id}-date`, v.nextDueDate),
                ].filter(notNull),
              })) ?? [
                {
                  id: "not_specified",
                  label: "PET_INFO.not_specified",
                  value: [],
                },
              ]
            }
          />
          <Infobox
            title={"PET_INFO.measurement"}
            showAction={true}
            showCopy={false}
            items={
              pet?.measurements?.map((m) => ({
                id: m.id,
                label: m.type,
                value: [
                  val(`f-${m.id}-value`, `${m.value}${m.unit}`),
                  val(`f-${m.id}-date`, m.date),
                  val(`f-${m.id}-note`, m.note),
                ].filter(notNull),
              })) ?? [
                {
                  id: "not_specified",
                  label: "PET_INFO.not_specified",
                  value: [],
                },
              ]
            }
          />
          <Infobox
            title={"PET_INFO.habitat"}
            showAction={true}
            showCopy={false}
            items={
              pet?.habitats?.map((h) => ({
                id: h.id,
                label: h.name ?? "Habitat",
                value: [
                  val(`f-${h.id}-size`, h.size),
                  val(`f-${h.id}-lighting`, h.lighting),
                  val(`f-${h.id}-heating`, h.heating),
                  val(`f-${h.id}-substrate`, h.substrate),
                  val(`f-${h.id}-targetTemp`, h.targetTemp),
                  val(`f-${h.id}-targetHumidity`, h.targetHumidity),
                  val(`f-${h.id}-notes`, h.notes),
                ].filter(notNull),
              })) ?? [
                {
                  id: "not_specified",
                  label: "PET_INFO.not_specified",
                  value: [],
                },
              ]
            }
          />
          <Infobox
            title={"PET_INFO.events"}
            showAction={true}
            showCopy={false}
            items={
              pet?.events?.map((e) => ({
                id: e.id,
                label: e.title ?? "Event",
                value: [
                  val(`f-${e.id}-description`, e.description),
                  val(`f-${e.id}-type`, e.type),
                  val(`f-${e.id}-date`, e.date),
                  val(`f-${e.id}-durationMinutes`, e.durationMinutes),
                  val(`f-${e.id}-location`, e.location),
                  val(`f-${e.id}-address`, e.address),
                  val(`f-${e.id}-status`, e.status),
                  val(`f-${e.id}-rating`, e.rating),
                ].filter(notNull),
              })) ?? [
                {
                  id: "not_specified",
                  label: "PET_INFO.not_specified",
                  value: [],
                },
              ]
            }
          />
          <Infobox
            title={"PET_INFO.reminders"}
            showAction={true}
            showCopy={false}
            items={
              pet?.reminders?.map((r) => ({
                id: r.id,
                label: r.title ?? "Reminder",
                value: [
                  val(`f-${r.id}-description`, r.description),
                  val(`f-${r.id}-type`, r.type),
                  val(`f-${r.id}-by-day`, r.byDay),
                  val(`f-${r.id}-by-month-day`, r.byMonthDay),
                  val(`f-${r.id}-until`, r.until),
                  val(`f-${r.id}-priority`, r.priority),
                  val(`f-${r.id}-status`, r.status),
                  val(`f-${r.id}-completedAt`, r.completedAt),
                  val(`f-${r.id}-timezone`, r.timezone),
                  val(`f-${r.id}-frequency`, r.frequency),
                ].filter(notNull),
              })) ?? [
                {
                  id: "not_specified",
                  label: "PET_INFO.not_specified",
                  value: [],
                },
              ]
            }
          />
          <Infobox
            title={"PET_INFO.documents"}
            showAction={true}
            showCopy={false}
            items={
              pet?.documents?.map((d) => ({
                id: d.id,
                label: d.type.name,
                value: [
                  val(`f-${d.id}-number`, d.number),
                  val(`f-${d.id}-issuedBy`, d.issuedBy),
                  val(`f-${d.id}-attachments`, d.attachments),
                  val(`f-${d.id}-valid`, `${d.validFrom}-${d.validTo}`),
                  val(`f-${d.id}-note`, d.note),
                ].filter(notNull),
              })) ?? [
                {
                  id: "not_specified",
                  label: "PET_INFO.not_specified",
                  value: [],
                },
              ]
            }
          />
          <Infobox
            title={"PET_INFO.note"}
            showAction={true}
            showCopy={false}
            items={
              pet?.note?.map((n) => ({
                id: n.id,
                label: n.title ?? "",
                value: [val(`f-${n.id}-number`, n.description)].filter(notNull),
              })) ?? [
                {
                  id: "not_specified",
                  label: "PET_INFO.not_specified",
                  value: [],
                },
              ]
            }
          />
        </div>
      </div>
    </div>
  );
}
