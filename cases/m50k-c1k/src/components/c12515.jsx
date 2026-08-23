import React from 'react';
const LABEL_12515 = 'component_12515';
export function Component12515({ value = 12515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12515, 'data-value': derived.doubled }, children);
}
export default Component12515;
