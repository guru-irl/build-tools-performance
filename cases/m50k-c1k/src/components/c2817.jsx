import React from 'react';
const LABEL_2817 = 'component_2817';
export function Component2817({ value = 2817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2817, 'data-value': derived.doubled }, children);
}
export default Component2817;
