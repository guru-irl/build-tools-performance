import React from 'react';
const LABEL_30161 = 'component_30161';
export function Component30161({ value = 30161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30161, 'data-value': derived.doubled }, children);
}
export default Component30161;
