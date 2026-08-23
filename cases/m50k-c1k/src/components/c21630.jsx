import React from 'react';
const LABEL_21630 = 'component_21630';
export function Component21630({ value = 21630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21630, 'data-value': derived.doubled }, children);
}
export default Component21630;
