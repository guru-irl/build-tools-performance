import React from 'react';
const LABEL_16878 = 'component_16878';
export function Component16878({ value = 16878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16878, 'data-value': derived.doubled }, children);
}
export default Component16878;
