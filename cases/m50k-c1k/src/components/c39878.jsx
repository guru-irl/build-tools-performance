import React from 'react';
const LABEL_39878 = 'component_39878';
export function Component39878({ value = 39878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39878, 'data-value': derived.doubled }, children);
}
export default Component39878;
