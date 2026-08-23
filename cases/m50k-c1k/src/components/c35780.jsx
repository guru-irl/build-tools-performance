import React from 'react';
const LABEL_35780 = 'component_35780';
export function Component35780({ value = 35780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35780, 'data-value': derived.doubled }, children);
}
export default Component35780;
