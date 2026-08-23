import React from 'react';
const LABEL_1878 = 'component_1878';
export function Component1878({ value = 1878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1878, 'data-value': derived.doubled }, children);
}
export default Component1878;
