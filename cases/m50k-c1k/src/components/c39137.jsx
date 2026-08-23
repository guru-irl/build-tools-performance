import React from 'react';
const LABEL_39137 = 'component_39137';
export function Component39137({ value = 39137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39137, 'data-value': derived.doubled }, children);
}
export default Component39137;
