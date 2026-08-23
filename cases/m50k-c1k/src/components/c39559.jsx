import React from 'react';
const LABEL_39559 = 'component_39559';
export function Component39559({ value = 39559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39559, 'data-value': derived.doubled }, children);
}
export default Component39559;
