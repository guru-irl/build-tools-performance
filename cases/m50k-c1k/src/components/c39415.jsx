import React from 'react';
const LABEL_39415 = 'component_39415';
export function Component39415({ value = 39415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39415, 'data-value': derived.doubled }, children);
}
export default Component39415;
