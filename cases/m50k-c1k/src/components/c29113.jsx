import React from 'react';
const LABEL_29113 = 'component_29113';
export function Component29113({ value = 29113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29113, 'data-value': derived.doubled }, children);
}
export default Component29113;
