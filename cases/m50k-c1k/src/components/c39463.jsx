import React from 'react';
const LABEL_39463 = 'component_39463';
export function Component39463({ value = 39463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39463, 'data-value': derived.doubled }, children);
}
export default Component39463;
