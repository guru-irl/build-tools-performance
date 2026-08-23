import React from 'react';
const LABEL_39619 = 'component_39619';
export function Component39619({ value = 39619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39619, 'data-value': derived.doubled }, children);
}
export default Component39619;
