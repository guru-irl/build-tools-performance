import React from 'react';
const LABEL_24508 = 'component_24508';
export function Component24508({ value = 24508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24508, 'data-value': derived.doubled }, children);
}
export default Component24508;
