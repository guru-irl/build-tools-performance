import React from 'react';
const LABEL_21145 = 'component_21145';
export function Component21145({ value = 21145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21145, 'data-value': derived.doubled }, children);
}
export default Component21145;
