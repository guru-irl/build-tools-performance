import React from 'react';
const LABEL_21150 = 'component_21150';
export function Component21150({ value = 21150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21150, 'data-value': derived.doubled }, children);
}
export default Component21150;
