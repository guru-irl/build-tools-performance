import React from 'react';
const LABEL_28268 = 'component_28268';
export function Component28268({ value = 28268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28268, 'data-value': derived.doubled }, children);
}
export default Component28268;
