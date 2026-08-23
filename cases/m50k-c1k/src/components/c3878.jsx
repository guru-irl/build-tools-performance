import React from 'react';
const LABEL_3878 = 'component_3878';
export function Component3878({ value = 3878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3878, 'data-value': derived.doubled }, children);
}
export default Component3878;
