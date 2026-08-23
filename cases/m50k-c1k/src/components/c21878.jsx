import React from 'react';
const LABEL_21878 = 'component_21878';
export function Component21878({ value = 21878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21878, 'data-value': derived.doubled }, children);
}
export default Component21878;
