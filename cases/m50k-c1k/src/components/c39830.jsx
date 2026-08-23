import React from 'react';
const LABEL_39830 = 'component_39830';
export function Component39830({ value = 39830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39830, 'data-value': derived.doubled }, children);
}
export default Component39830;
