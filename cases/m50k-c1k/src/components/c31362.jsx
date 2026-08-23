import React from 'react';
const LABEL_31362 = 'component_31362';
export function Component31362({ value = 31362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31362, 'data-value': derived.doubled }, children);
}
export default Component31362;
