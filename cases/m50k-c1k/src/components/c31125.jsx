import React from 'react';
const LABEL_31125 = 'component_31125';
export function Component31125({ value = 31125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31125, 'data-value': derived.doubled }, children);
}
export default Component31125;
