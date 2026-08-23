import React from 'react';
const LABEL_5509 = 'component_5509';
export function Component5509({ value = 5509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5509, 'data-value': derived.doubled }, children);
}
export default Component5509;
