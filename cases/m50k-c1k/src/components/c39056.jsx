import React from 'react';
const LABEL_39056 = 'component_39056';
export function Component39056({ value = 39056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39056, 'data-value': derived.doubled }, children);
}
export default Component39056;
