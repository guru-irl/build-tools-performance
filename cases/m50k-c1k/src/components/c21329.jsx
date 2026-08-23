import React from 'react';
const LABEL_21329 = 'component_21329';
export function Component21329({ value = 21329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21329, 'data-value': derived.doubled }, children);
}
export default Component21329;
