import React from 'react';
const LABEL_44947 = 'component_44947';
export function Component44947({ value = 44947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44947, 'data-value': derived.doubled }, children);
}
export default Component44947;
