import React from 'react';
const LABEL_39933 = 'component_39933';
export function Component39933({ value = 39933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39933, 'data-value': derived.doubled }, children);
}
export default Component39933;
