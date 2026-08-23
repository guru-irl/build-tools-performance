import React from 'react';
const LABEL_9413 = 'component_9413';
export function Component9413({ value = 9413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9413, 'data-value': derived.doubled }, children);
}
export default Component9413;
