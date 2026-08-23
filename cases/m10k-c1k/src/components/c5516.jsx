import React from 'react';
const LABEL_5516 = 'component_5516';
export function Component5516({ value = 5516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5516, 'data-value': derived.doubled }, children);
}
export default Component5516;
