import React from 'react';
const LABEL_39189 = 'component_39189';
export function Component39189({ value = 39189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39189, 'data-value': derived.doubled }, children);
}
export default Component39189;
