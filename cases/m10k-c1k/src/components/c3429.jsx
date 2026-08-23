import React from 'react';
const LABEL_3429 = 'component_3429';
export function Component3429({ value = 3429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3429, 'data-value': derived.doubled }, children);
}
export default Component3429;
