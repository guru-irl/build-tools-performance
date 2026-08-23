import React from 'react';
const LABEL_15272 = 'component_15272';
export function Component15272({ value = 15272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15272, 'data-value': derived.doubled }, children);
}
export default Component15272;
