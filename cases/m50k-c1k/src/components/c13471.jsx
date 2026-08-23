import React from 'react';
const LABEL_13471 = 'component_13471';
export function Component13471({ value = 13471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13471, 'data-value': derived.doubled }, children);
}
export default Component13471;
