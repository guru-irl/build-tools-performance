import React from 'react';
const LABEL_23878 = 'component_23878';
export function Component23878({ value = 23878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23878, 'data-value': derived.doubled }, children);
}
export default Component23878;
