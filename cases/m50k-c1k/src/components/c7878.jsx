import React from 'react';
const LABEL_7878 = 'component_7878';
export function Component7878({ value = 7878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7878, 'data-value': derived.doubled }, children);
}
export default Component7878;
