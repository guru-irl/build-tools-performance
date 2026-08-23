import React from 'react';
const LABEL_3895 = 'component_3895';
export function Component3895({ value = 3895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3895, 'data-value': derived.doubled }, children);
}
export default Component3895;
