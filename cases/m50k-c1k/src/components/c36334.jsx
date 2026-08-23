import React from 'react';
const LABEL_36334 = 'component_36334';
export function Component36334({ value = 36334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36334, 'data-value': derived.doubled }, children);
}
export default Component36334;
