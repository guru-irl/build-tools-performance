import React from 'react';
const LABEL_39390 = 'component_39390';
export function Component39390({ value = 39390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39390, 'data-value': derived.doubled }, children);
}
export default Component39390;
