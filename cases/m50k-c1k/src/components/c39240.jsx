import React from 'react';
const LABEL_39240 = 'component_39240';
export function Component39240({ value = 39240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39240, 'data-value': derived.doubled }, children);
}
export default Component39240;
