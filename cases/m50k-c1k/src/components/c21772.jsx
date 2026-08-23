import React from 'react';
const LABEL_21772 = 'component_21772';
export function Component21772({ value = 21772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21772, 'data-value': derived.doubled }, children);
}
export default Component21772;
