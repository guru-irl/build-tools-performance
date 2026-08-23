import React from 'react';
const LABEL_15356 = 'component_15356';
export function Component15356({ value = 15356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15356, 'data-value': derived.doubled }, children);
}
export default Component15356;
