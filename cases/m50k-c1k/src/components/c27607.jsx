import React from 'react';
const LABEL_27607 = 'component_27607';
export function Component27607({ value = 27607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27607, 'data-value': derived.doubled }, children);
}
export default Component27607;
