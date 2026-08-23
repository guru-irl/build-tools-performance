import React from 'react';
const LABEL_3255 = 'component_3255';
export function Component3255({ value = 3255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3255, 'data-value': derived.doubled }, children);
}
export default Component3255;
