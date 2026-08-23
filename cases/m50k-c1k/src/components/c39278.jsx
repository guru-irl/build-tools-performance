import React from 'react';
const LABEL_39278 = 'component_39278';
export function Component39278({ value = 39278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39278, 'data-value': derived.doubled }, children);
}
export default Component39278;
