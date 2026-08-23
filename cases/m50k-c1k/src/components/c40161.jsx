import React from 'react';
const LABEL_40161 = 'component_40161';
export function Component40161({ value = 40161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40161, 'data-value': derived.doubled }, children);
}
export default Component40161;
