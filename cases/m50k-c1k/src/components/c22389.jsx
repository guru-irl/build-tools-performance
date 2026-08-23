import React from 'react';
const LABEL_22389 = 'component_22389';
export function Component22389({ value = 22389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22389, 'data-value': derived.doubled }, children);
}
export default Component22389;
