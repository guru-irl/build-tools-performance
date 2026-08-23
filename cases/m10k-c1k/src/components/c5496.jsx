import React from 'react';
const LABEL_5496 = 'component_5496';
export function Component5496({ value = 5496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5496, 'data-value': derived.doubled }, children);
}
export default Component5496;
