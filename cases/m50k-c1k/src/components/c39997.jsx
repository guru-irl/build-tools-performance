import React from 'react';
const LABEL_39997 = 'component_39997';
export function Component39997({ value = 39997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39997, 'data-value': derived.doubled }, children);
}
export default Component39997;
