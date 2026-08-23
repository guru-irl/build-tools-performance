import React from 'react';
const LABEL_3180 = 'component_3180';
export function Component3180({ value = 3180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3180, 'data-value': derived.doubled }, children);
}
export default Component3180;
