import React from 'react';
const LABEL_39913 = 'component_39913';
export function Component39913({ value = 39913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39913, 'data-value': derived.doubled }, children);
}
export default Component39913;
