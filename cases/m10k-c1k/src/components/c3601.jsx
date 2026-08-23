import React from 'react';
const LABEL_3601 = 'component_3601';
export function Component3601({ value = 3601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3601, 'data-value': derived.doubled }, children);
}
export default Component3601;
