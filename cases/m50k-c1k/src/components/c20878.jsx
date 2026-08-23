import React from 'react';
const LABEL_20878 = 'component_20878';
export function Component20878({ value = 20878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20878, 'data-value': derived.doubled }, children);
}
export default Component20878;
