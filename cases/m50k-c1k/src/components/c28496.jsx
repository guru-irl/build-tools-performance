import React from 'react';
const LABEL_28496 = 'component_28496';
export function Component28496({ value = 28496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28496, 'data-value': derived.doubled }, children);
}
export default Component28496;
