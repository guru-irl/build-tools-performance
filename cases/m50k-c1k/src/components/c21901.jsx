import React from 'react';
const LABEL_21901 = 'component_21901';
export function Component21901({ value = 21901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21901, 'data-value': derived.doubled }, children);
}
export default Component21901;
