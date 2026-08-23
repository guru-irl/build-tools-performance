import React from 'react';
const LABEL_39182 = 'component_39182';
export function Component39182({ value = 39182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39182, 'data-value': derived.doubled }, children);
}
export default Component39182;
