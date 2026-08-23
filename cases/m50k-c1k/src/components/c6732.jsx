import React from 'react';
const LABEL_6732 = 'component_6732';
export function Component6732({ value = 6732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6732, 'data-value': derived.doubled }, children);
}
export default Component6732;
