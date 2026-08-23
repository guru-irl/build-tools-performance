import React from 'react';
const LABEL_15260 = 'component_15260';
export function Component15260({ value = 15260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15260, 'data-value': derived.doubled }, children);
}
export default Component15260;
