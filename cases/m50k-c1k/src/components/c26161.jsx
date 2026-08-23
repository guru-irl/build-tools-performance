import React from 'react';
const LABEL_26161 = 'component_26161';
export function Component26161({ value = 26161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26161, 'data-value': derived.doubled }, children);
}
export default Component26161;
