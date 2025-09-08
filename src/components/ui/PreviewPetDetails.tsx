import type { PetType } from "../../core/types/pet-type.ts";
import { PetTypeIconMap } from "../../assets/icons/pet-type/map.ts";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { PetGender } from "../../core/types/pet-gender.ts";

type Props = {
  petId: string;
  name: string;
  type: PetType;
  birthday: string;
  gender: PetGender;
  age: string;
  breed?: string;
  photo?: string;
};

export function PreviewPetDetails({
  petId,
  name,
  type,
  birthday,
  gender,
  age,
  photo,
}: Readonly<Props>) {
  const { t } = useTranslation(undefined, { keyPrefix: "PET_INFO" });
  const Icon = PetTypeIconMap[type];

  return (
    <div id={"preview-pet-details"} className={"primary-box shadow-1"}>
      <Link to={`/pet-detail/${petId}`} className={"preview-box"}>
        <div className={"avatar primary-box"} aria-hidden>
          {photo ? (
            <img
              src={photo}
              alt={`${name} avatar`}
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
            <Icon width={48} height={48} />
          )}
        </div>
        <div className={"primary-box info-box"}>
          <div>
            {t("name")}: {name}
          </div>
          <div>
            {t("birthday")}: {birthday}
          </div>
          <div>
            {t("gender")}: {gender}
          </div>
          <div>
            {t("age")}: {age}
          </div>
        </div>
      </Link>
    </div>
  );
}
