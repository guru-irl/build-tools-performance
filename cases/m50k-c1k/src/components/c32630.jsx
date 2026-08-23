import React from 'react';
const LABEL_32630 = 'component_32630';
export function Component32630({ value = 32630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32630, 'data-value': derived.doubled }, children);
}
export default Component32630;
