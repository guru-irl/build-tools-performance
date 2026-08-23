import React from 'react';
const LABEL_39657 = 'component_39657';
export function Component39657({ value = 39657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39657, 'data-value': derived.doubled }, children);
}
export default Component39657;
