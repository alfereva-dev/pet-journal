import {
  isValidElement,
  type ReactElement,
  type ReactNode,
  useId,
} from "react";
import { useState } from "react";
import CopyIcon from "../../assets/icons/action/duplicate.svg?react";
import OpenIcon from "../../assets/icons/action/open.svg?react";
import CloseIcon from "../../assets/icons/action/close.svg?react";
import { useTranslation } from "react-i18next";

type InfoValue = {
  id: string;
  content: ReactNode;
  translate?: boolean;
};

type InfoItem = {
  id: string;
  label: string;
  value: InfoValue[];
  copyText?: string;
  showCopy?: boolean;
};

type Props = {
  title?: string;
  items: InfoItem[];
  showCopy?: boolean;
  showAction?: boolean;
  className?: string;
  classNameInfobox?: string;
};

export function Infobox({
  title,
  items,
  showCopy = true,
  showAction = false,
  className,
  classNameInfobox,
}: Readonly<Props>) {
  const { t } = useTranslation(undefined);
  const [isOpen, setIsOpen] = useState(true);
  const listId = useId();
  const Icon = isOpen ? CloseIcon : OpenIcon;
  const toggle = () => setIsOpen((v) => !v);

  return (
    <div
      id={"infobox"}
      className={`primary-box infobox ${className} ${classNameInfobox}`}
    >
      {title && (
        <div className={"infobox-header"}>
          <div className="infobox-title">{t(title)}</div>
          {showAction && (
            <button
              className="icon-btn"
              onClick={toggle}
              aria-expanded={isOpen}
              aria-controls={listId}
              title={isOpen ? t("COMMON.hide") : t("COMMON.show")}
            >
              <Icon width={20} height={20} />
            </button>
          )}
        </div>
      )}

      <div
        className={`infobox-list ${className} ${isOpen ? "" : "is-collapsed"}`}
      >
        {items.map((it) => (
          <InfoboxRow
            key={it.id}
            label={it.label}
            values={it.value}
            copyText={it.copyText}
            showCopy={it.showCopy ?? showCopy}
          />
        ))}
      </div>
    </div>
  );
}

function InfoboxRow({
  label,
  values,
  copyText,
  showCopy,
}: Readonly<{
  label: string;
  values: InfoValue[];
  copyText?: string;
  showCopy: boolean;
}>) {
  const [copied, setCopied] = useState(false);

  const resolveCopyText = (v: InfoValue): string => {
    const anyV = v as InfoValue & { copyText?: string };
    if (anyV.copyText) return anyV.copyText;

    if (typeof v.content === "string") return v.content;

    if (isValidElement(v.content)) {
      const element = v.content as ReactElement<{
        href?: string;
        children?: ReactNode;
      }>;
      if (element.props.href) return element.props.href;
      if (typeof element.props.children === "string")
        return element.props.children;
    }

    return copyText ?? "";
  };

  const handleCopy = async (text?: string) => {
    const toCopy = text ?? "";
    if (!toCopy) return;
    try {
      await navigator.clipboard.writeText(toCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      console.log("error");
    }
  };

  const { t } = useTranslation(undefined);

  return (
    <div>
      <div className="infobox-col label">{t(label)}</div>
      <div className="infobox-row">
        {values.map((v) => {
          const content =
            v.translate && typeof v.content === "string"
              ? t(v.content)
              : v.content;
          const toCopy = resolveCopyText(v);

          return (
            <div className="infobox-col value" key={v.id}>
              {content}
              {showCopy && (
                <button
                  className="icon-btn"
                  aria-label={copied ? "Copied" : "Copy"}
                  onClick={() => handleCopy(toCopy)}
                >
                  <CopyIcon width={20} height={20} />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
