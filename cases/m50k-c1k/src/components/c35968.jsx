import React from 'react';
const LABEL_35968 = 'component_35968';
export function Component35968({ value = 35968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35968, 'data-value': derived.doubled }, children);
}
export default Component35968;
