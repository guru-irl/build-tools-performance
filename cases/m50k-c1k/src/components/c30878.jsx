import React from 'react';
const LABEL_30878 = 'component_30878';
export function Component30878({ value = 30878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30878, 'data-value': derived.doubled }, children);
}
export default Component30878;
