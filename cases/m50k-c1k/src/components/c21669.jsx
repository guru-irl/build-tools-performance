import React from 'react';
const LABEL_21669 = 'component_21669';
export function Component21669({ value = 21669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21669, 'data-value': derived.doubled }, children);
}
export default Component21669;
