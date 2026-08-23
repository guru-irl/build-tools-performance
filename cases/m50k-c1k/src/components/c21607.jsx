import React from 'react';
const LABEL_21607 = 'component_21607';
export function Component21607({ value = 21607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21607, 'data-value': derived.doubled }, children);
}
export default Component21607;
