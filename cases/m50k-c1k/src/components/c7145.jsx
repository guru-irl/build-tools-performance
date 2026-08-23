import React from 'react';
const LABEL_7145 = 'component_7145';
export function Component7145({ value = 7145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7145, 'data-value': derived.doubled }, children);
}
export default Component7145;
