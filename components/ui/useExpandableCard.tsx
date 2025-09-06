"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ExpandableCardContextType {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  expandCard: () => void;
}

const ExpandableCardContext = createContext<
  ExpandableCardContextType | undefined
>(undefined);

export const useExpandableCard = () => {
  const context = useContext(ExpandableCardContext);
  if (!context) {
    throw new Error(
      "useExpandableCard must be used within an ExpandableCardProvider"
    );
  }
  return context;
};

export const ExpandableCardProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandCard = () => setIsExpanded(true);

  return (
    <ExpandableCardContext.Provider
      value={{ isExpanded, setIsExpanded, expandCard }}
    >
      {children}
    </ExpandableCardContext.Provider>
  );
};
