import React from 'react';
const LABEL_36878 = 'component_36878';
export function Component36878({ value = 36878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36878, 'data-value': derived.doubled }, children);
}
export default Component36878;
