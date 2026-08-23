import React from 'react';
const LABEL_33732 = 'component_33732';
export function Component33732({ value = 33732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33732, 'data-value': derived.doubled }, children);
}
export default Component33732;
