import React from 'react';
const LABEL_39232 = 'component_39232';
export function Component39232({ value = 39232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39232, 'data-value': derived.doubled }, children);
}
export default Component39232;
