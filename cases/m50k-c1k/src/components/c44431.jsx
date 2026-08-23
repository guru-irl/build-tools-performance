import React from 'react';
const LABEL_44431 = 'component_44431';
export function Component44431({ value = 44431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44431, 'data-value': derived.doubled }, children);
}
export default Component44431;
