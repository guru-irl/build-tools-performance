import React from 'react';
const LABEL_9899 = 'component_9899';
export function Component9899({ value = 9899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9899, 'data-value': derived.doubled }, children);
}
export default Component9899;
