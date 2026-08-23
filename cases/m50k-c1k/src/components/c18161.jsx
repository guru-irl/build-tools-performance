import React from 'react';
const LABEL_18161 = 'component_18161';
export function Component18161({ value = 18161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18161, 'data-value': derived.doubled }, children);
}
export default Component18161;
