import React from 'react';
const LABEL_39876 = 'component_39876';
export function Component39876({ value = 39876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39876, 'data-value': derived.doubled }, children);
}
export default Component39876;
