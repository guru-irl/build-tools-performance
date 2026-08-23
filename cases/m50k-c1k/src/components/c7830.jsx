import React from 'react';
const LABEL_7830 = 'component_7830';
export function Component7830({ value = 7830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7830, 'data-value': derived.doubled }, children);
}
export default Component7830;
