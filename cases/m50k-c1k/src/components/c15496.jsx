import React from 'react';
const LABEL_15496 = 'component_15496';
export function Component15496({ value = 15496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15496, 'data-value': derived.doubled }, children);
}
export default Component15496;
