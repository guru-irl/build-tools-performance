import React from 'react';
const LABEL_3817 = 'component_3817';
export function Component3817({ value = 3817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3817, 'data-value': derived.doubled }, children);
}
export default Component3817;
