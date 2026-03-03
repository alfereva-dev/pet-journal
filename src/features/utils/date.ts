export function formatDateDMY(iso?: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

export function calcAgeDetail(
  birthIso?: string,
  endIso?: string,
): { years: number; months: number } | null {
  if (!birthIso) return null;
  const birth = new Date(birthIso);
  if (Number.isNaN(birth.getTime())) return null;

  const end = endIso ? new Date(endIso) : new Date();
  if (Number.isNaN(end.getTime())) return null;

  let years = end.getFullYear() - birth.getFullYear();
  let months = end.getMonth() - birth.getMonth();
  if (end.getDate() < birth.getDate()) months--;

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}

export const formatAgeLabel = (birthIso?: string, endIso?: string): string => {
  const detail = calcAgeDetail(birthIso, endIso);
  if (!detail) return "unknown";
  const { years, months } = detail;
  return months > 0 ? `${years}y ${months}m` : `${years} y`;
};
