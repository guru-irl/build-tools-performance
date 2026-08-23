import React from 'react';
const LABEL_5878 = 'component_5878';
export function Component5878({ value = 5878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5878, 'data-value': derived.doubled }, children);
}
export default Component5878;
