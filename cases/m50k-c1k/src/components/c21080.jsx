import React from 'react';
const LABEL_21080 = 'component_21080';
export function Component21080({ value = 21080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21080, 'data-value': derived.doubled }, children);
}
export default Component21080;
