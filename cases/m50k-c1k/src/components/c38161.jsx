import React from 'react';
const LABEL_38161 = 'component_38161';
export function Component38161({ value = 38161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38161, 'data-value': derived.doubled }, children);
}
export default Component38161;
