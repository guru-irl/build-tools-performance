import React from 'react';
const LABEL_18197 = 'component_18197';
export function Component18197({ value = 18197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18197, 'data-value': derived.doubled }, children);
}
export default Component18197;
