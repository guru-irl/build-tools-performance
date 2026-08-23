import React from 'react';
const LABEL_17878 = 'component_17878';
export function Component17878({ value = 17878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17878, 'data-value': derived.doubled }, children);
}
export default Component17878;
