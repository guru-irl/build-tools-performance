import React from 'react';
const LABEL_12577 = 'component_12577';
export function Component12577({ value = 12577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12577, 'data-value': derived.doubled }, children);
}
export default Component12577;
