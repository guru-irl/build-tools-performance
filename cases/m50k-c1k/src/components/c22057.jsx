import React from 'react';
const LABEL_22057 = 'component_22057';
export function Component22057({ value = 22057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22057, 'data-value': derived.doubled }, children);
}
export default Component22057;
