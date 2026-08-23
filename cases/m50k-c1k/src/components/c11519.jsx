import React from 'react';
const LABEL_11519 = 'component_11519';
export function Component11519({ value = 11519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11519, 'data-value': derived.doubled }, children);
}
export default Component11519;
