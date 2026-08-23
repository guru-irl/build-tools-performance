import React from 'react';
const LABEL_39726 = 'component_39726';
export function Component39726({ value = 39726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39726, 'data-value': derived.doubled }, children);
}
export default Component39726;
