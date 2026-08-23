import React from 'react';
const LABEL_33334 = 'component_33334';
export function Component33334({ value = 33334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33334, 'data-value': derived.doubled }, children);
}
export default Component33334;
