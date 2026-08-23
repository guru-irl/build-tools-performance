import React from 'react';
const LABEL_26878 = 'component_26878';
export function Component26878({ value = 26878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26878, 'data-value': derived.doubled }, children);
}
export default Component26878;
