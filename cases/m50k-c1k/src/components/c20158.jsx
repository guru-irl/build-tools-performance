import React from 'react';
const LABEL_20158 = 'component_20158';
export function Component20158({ value = 20158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20158, 'data-value': derived.doubled }, children);
}
export default Component20158;
