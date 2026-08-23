import React from 'react';
const LABEL_3160 = 'component_3160';
export function Component3160({ value = 3160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3160, 'data-value': derived.doubled }, children);
}
export default Component3160;
