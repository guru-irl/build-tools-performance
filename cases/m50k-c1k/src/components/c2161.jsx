import React from 'react';
const LABEL_2161 = 'component_2161';
export function Component2161({ value = 2161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2161, 'data-value': derived.doubled }, children);
}
export default Component2161;
