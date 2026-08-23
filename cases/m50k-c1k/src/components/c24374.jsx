import React from 'react';
const LABEL_24374 = 'component_24374';
export function Component24374({ value = 24374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24374, 'data-value': derived.doubled }, children);
}
export default Component24374;
