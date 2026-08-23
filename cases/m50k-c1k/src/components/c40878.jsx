import React from 'react';
const LABEL_40878 = 'component_40878';
export function Component40878({ value = 40878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40878, 'data-value': derived.doubled }, children);
}
export default Component40878;
