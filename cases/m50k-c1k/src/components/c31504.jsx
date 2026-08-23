import React from 'react';
const LABEL_31504 = 'component_31504';
export function Component31504({ value = 31504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31504, 'data-value': derived.doubled }, children);
}
export default Component31504;
