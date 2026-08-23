import React from 'react';
const LABEL_39126 = 'component_39126';
export function Component39126({ value = 39126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39126, 'data-value': derived.doubled }, children);
}
export default Component39126;
