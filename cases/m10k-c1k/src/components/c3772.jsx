import React from 'react';
const LABEL_3772 = 'component_3772';
export function Component3772({ value = 3772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3772, 'data-value': derived.doubled }, children);
}
export default Component3772;
