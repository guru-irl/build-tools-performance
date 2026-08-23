import React from 'react';
const LABEL_36161 = 'component_36161';
export function Component36161({ value = 36161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36161, 'data-value': derived.doubled }, children);
}
export default Component36161;
