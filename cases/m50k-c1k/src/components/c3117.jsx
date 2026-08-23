import React from 'react';
const LABEL_3117 = 'component_3117';
export function Component3117({ value = 3117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3117, 'data-value': derived.doubled }, children);
}
export default Component3117;
