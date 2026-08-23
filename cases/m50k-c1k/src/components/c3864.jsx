import React from 'react';
const LABEL_3864 = 'component_3864';
export function Component3864({ value = 3864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3864, 'data-value': derived.doubled }, children);
}
export default Component3864;
