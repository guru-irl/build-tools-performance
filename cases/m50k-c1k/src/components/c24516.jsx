import React from 'react';
const LABEL_24516 = 'component_24516';
export function Component24516({ value = 24516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24516, 'data-value': derived.doubled }, children);
}
export default Component24516;
