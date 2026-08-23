import React from 'react';
const LABEL_3274 = 'component_3274';
export function Component3274({ value = 3274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3274, 'data-value': derived.doubled }, children);
}
export default Component3274;
