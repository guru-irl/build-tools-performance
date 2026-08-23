import React from 'react';
const LABEL_31496 = 'component_31496';
export function Component31496({ value = 31496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31496, 'data-value': derived.doubled }, children);
}
export default Component31496;
