import React from 'react';
const LABEL_21647 = 'component_21647';
export function Component21647({ value = 21647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21647, 'data-value': derived.doubled }, children);
}
export default Component21647;
