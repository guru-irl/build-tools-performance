import React from 'react';
const LABEL_24732 = 'component_24732';
export function Component24732({ value = 24732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24732, 'data-value': derived.doubled }, children);
}
export default Component24732;
