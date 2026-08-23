import React from 'react';
const LABEL_32280 = 'component_32280';
export function Component32280({ value = 32280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32280, 'data-value': derived.doubled }, children);
}
export default Component32280;
