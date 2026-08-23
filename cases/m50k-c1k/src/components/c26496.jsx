import React from 'react';
const LABEL_26496 = 'component_26496';
export function Component26496({ value = 26496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26496, 'data-value': derived.doubled }, children);
}
export default Component26496;
