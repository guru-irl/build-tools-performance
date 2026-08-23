import React from 'react';
const LABEL_34161 = 'component_34161';
export function Component34161({ value = 34161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34161, 'data-value': derived.doubled }, children);
}
export default Component34161;
