import React from 'react';
const LABEL_44389 = 'component_44389';
export function Component44389({ value = 44389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44389, 'data-value': derived.doubled }, children);
}
export default Component44389;
