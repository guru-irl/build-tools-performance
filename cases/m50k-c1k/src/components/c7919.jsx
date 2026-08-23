import React from 'react';
const LABEL_7919 = 'component_7919';
export function Component7919({ value = 7919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7919, 'data-value': derived.doubled }, children);
}
export default Component7919;
