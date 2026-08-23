import React from 'react';
const LABEL_31083 = 'component_31083';
export function Component31083({ value = 31083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31083, 'data-value': derived.doubled }, children);
}
export default Component31083;
