import React from 'react';
const LABEL_39276 = 'component_39276';
export function Component39276({ value = 39276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39276, 'data-value': derived.doubled }, children);
}
export default Component39276;
