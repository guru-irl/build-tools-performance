import React from 'react';
const LABEL_22878 = 'component_22878';
export function Component22878({ value = 22878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22878, 'data-value': derived.doubled }, children);
}
export default Component22878;
