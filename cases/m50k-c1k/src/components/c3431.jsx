import React from 'react';
const LABEL_3431 = 'component_3431';
export function Component3431({ value = 3431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3431, 'data-value': derived.doubled }, children);
}
export default Component3431;
