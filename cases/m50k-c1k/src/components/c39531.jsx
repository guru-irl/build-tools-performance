import React from 'react';
const LABEL_39531 = 'component_39531';
export function Component39531({ value = 39531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39531, 'data-value': derived.doubled }, children);
}
export default Component39531;
