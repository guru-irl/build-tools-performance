import React from 'react';
const LABEL_6161 = 'component_6161';
export function Component6161({ value = 6161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6161, 'data-value': derived.doubled }, children);
}
export default Component6161;
