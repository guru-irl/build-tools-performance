import React from 'react';
const LABEL_12878 = 'component_12878';
export function Component12878({ value = 12878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12878, 'data-value': derived.doubled }, children);
}
export default Component12878;
