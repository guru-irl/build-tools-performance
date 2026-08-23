import React from 'react';
const LABEL_23847 = 'component_23847';
export function Component23847({ value = 23847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23847, 'data-value': derived.doubled }, children);
}
export default Component23847;
