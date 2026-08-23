import React from 'react';
const LABEL_39603 = 'component_39603';
export function Component39603({ value = 39603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39603, 'data-value': derived.doubled }, children);
}
export default Component39603;
