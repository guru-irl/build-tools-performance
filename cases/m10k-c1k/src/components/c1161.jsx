import React from 'react';
const LABEL_1161 = 'component_1161';
export function Component1161({ value = 1161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1161, 'data-value': derived.doubled }, children);
}
export default Component1161;
