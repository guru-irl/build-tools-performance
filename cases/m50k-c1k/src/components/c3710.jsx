import React from 'react';
const LABEL_3710 = 'component_3710';
export function Component3710({ value = 3710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3710, 'data-value': derived.doubled }, children);
}
export default Component3710;
