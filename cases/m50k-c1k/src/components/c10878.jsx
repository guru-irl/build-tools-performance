import React from 'react';
const LABEL_10878 = 'component_10878';
export function Component10878({ value = 10878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10878, 'data-value': derived.doubled }, children);
}
export default Component10878;
