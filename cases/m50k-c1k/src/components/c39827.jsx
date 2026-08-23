import React from 'react';
const LABEL_39827 = 'component_39827';
export function Component39827({ value = 39827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39827, 'data-value': derived.doubled }, children);
}
export default Component39827;
