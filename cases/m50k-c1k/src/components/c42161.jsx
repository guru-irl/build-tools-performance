import React from 'react';
const LABEL_42161 = 'component_42161';
export function Component42161({ value = 42161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42161, 'data-value': derived.doubled }, children);
}
export default Component42161;
