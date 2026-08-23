import React from 'react';
const LABEL_39482 = 'component_39482';
export function Component39482({ value = 39482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39482, 'data-value': derived.doubled }, children);
}
export default Component39482;
