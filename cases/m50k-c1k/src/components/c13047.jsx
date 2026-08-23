import React from 'react';
const LABEL_13047 = 'component_13047';
export function Component13047({ value = 13047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13047, 'data-value': derived.doubled }, children);
}
export default Component13047;
