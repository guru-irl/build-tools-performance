import React from 'react';
const LABEL_39070 = 'component_39070';
export function Component39070({ value = 39070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39070, 'data-value': derived.doubled }, children);
}
export default Component39070;
