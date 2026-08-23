import React from 'react';
const LABEL_44132 = 'component_44132';
export function Component44132({ value = 44132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44132, 'data-value': derived.doubled }, children);
}
export default Component44132;
