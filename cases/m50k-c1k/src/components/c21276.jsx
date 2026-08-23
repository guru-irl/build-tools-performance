import React from 'react';
const LABEL_21276 = 'component_21276';
export function Component21276({ value = 21276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21276, 'data-value': derived.doubled }, children);
}
export default Component21276;
