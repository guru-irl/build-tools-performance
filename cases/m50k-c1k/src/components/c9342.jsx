import React from 'react';
const LABEL_9342 = 'component_9342';
export function Component9342({ value = 9342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9342, 'data-value': derived.doubled }, children);
}
export default Component9342;
