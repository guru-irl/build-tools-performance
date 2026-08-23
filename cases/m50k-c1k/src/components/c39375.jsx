import React from 'react';
const LABEL_39375 = 'component_39375';
export function Component39375({ value = 39375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39375, 'data-value': derived.doubled }, children);
}
export default Component39375;
