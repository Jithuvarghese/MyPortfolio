import { useCallback, useEffect, useId, useRef, useState } from "react";
import { FiCheck, FiGlobe } from "react-icons/fi";
import IconWrapper from "./IconWrapper";
import { useAppPreferences } from "../context/AppPreferencesContext";

interface LanguageMenuProps {
  /** Render the list in normal flow (mobile overlay) instead of a floating dropdown. */
  inline?: boolean;
}

const LanguageMenu = ({ inline = false }: LanguageMenuProps) => {
  const { locale, setLocale, locales } = useAppPreferences();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const listId = useId();
  const label = "Change language";

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }, []);

  // Close on outside press while open.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Move focus to the selected option when the list opens.
  useEffect(() => {
    if (!open) return;
    const index = Math.max(0, locales.findIndex((option) => option.code === locale));
    itemRefs.current[index]?.focus();
  }, [open, locale, locales]);

  const focusItem = (index: number) => {
    const count = locales.length;
    itemRefs.current[(index + count) % count]?.focus();
  };

  // Escape is handled on the element (not document) and stopped here, so inside the
  // mobile overlay it closes only the list; a second Escape then closes the overlay.
  const onEscape = (event: React.KeyboardEvent) => {
    if (event.key === "Escape" && open) {
      event.stopPropagation();
      close(true);
      return true;
    }
    return false;
  };

  const onListKeyDown = (event: React.KeyboardEvent) => {
    if (onEscape(event)) return;
    const current = itemRefs.current.findIndex((el) => el === document.activeElement);
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusItem(current + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusItem(current - 1);
        break;
      case "Home":
        event.preventDefault();
        focusItem(0);
        break;
      case "End":
        event.preventDefault();
        focusItem(locales.length - 1);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  const onButtonKeyDown = (event: React.KeyboardEvent) => {
    if (onEscape(event)) return;
    if (event.key === "ArrowDown" && !open) {
      event.preventDefault();
      setOpen(true);
    }
  };

  const list = open && (
    <ul
      id={listId}
      role="listbox"
      aria-label={label}
      onKeyDown={onListKeyDown}
      className={
        inline
          ? "order-last w-full basis-full border border-line bg-bg"
          : "absolute end-0 top-full z-30 mt-2 min-w-[11rem] border border-line bg-bg"
      }
    >
      {locales.map((option, index) => {
        const selected = option.code === locale;
        return (
          <li key={option.code} role="presentation">
            <button
              type="button"
              role="option"
              aria-selected={selected}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              onClick={() => {
                setLocale(option.code);
                close(true);
              }}
              className={`flex w-full items-center justify-between gap-6 px-4 py-3 text-start text-sm transition-colors hover:bg-surface focus-visible:bg-surface focus-visible:outline-offset-[-2px] ${
                selected ? "font-bold text-fg" : "text-muted hover:text-fg"
              }`}
            >
              <span>{option.label}</span>
              <span className="inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
                {selected && <IconWrapper icon={FiCheck} className="flex" />}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div ref={rootRef} className={inline ? "contents" : "relative"}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        onKeyDown={onButtonKeyDown}
        className="icon-btn"
        aria-label={label}
        title={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
      >
        <IconWrapper icon={FiGlobe} className="flex" />
      </button>
      {list}
    </div>
  );
};

export default LanguageMenu;
