import React from 'react';
const LABEL_3391 = 'component_3391';
export function Component3391({ value = 3391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3391, 'data-value': derived.doubled }, children);
}
export default Component3391;
