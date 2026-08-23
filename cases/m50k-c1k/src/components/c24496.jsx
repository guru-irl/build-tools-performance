import React from 'react';
const LABEL_24496 = 'component_24496';
export function Component24496({ value = 24496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24496, 'data-value': derived.doubled }, children);
}
export default Component24496;
