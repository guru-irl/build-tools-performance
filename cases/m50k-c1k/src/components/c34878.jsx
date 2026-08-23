import React from 'react';
const LABEL_34878 = 'component_34878';
export function Component34878({ value = 34878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34878, 'data-value': derived.doubled }, children);
}
export default Component34878;
