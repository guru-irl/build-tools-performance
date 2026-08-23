import React from 'react';
const LABEL_46471 = 'component_46471';
export function Component46471({ value = 46471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46471, 'data-value': derived.doubled }, children);
}
export default Component46471;
