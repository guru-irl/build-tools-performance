import React from 'react';
const LABEL_23334 = 'component_23334';
export function Component23334({ value = 23334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23334, 'data-value': derived.doubled }, children);
}
export default Component23334;
