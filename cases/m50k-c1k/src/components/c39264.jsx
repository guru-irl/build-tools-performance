import React from 'react';
const LABEL_39264 = 'component_39264';
export function Component39264({ value = 39264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39264, 'data-value': derived.doubled }, children);
}
export default Component39264;
