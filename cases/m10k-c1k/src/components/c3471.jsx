import React from 'react';
const LABEL_3471 = 'component_3471';
export function Component3471({ value = 3471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3471, 'data-value': derived.doubled }, children);
}
export default Component3471;
