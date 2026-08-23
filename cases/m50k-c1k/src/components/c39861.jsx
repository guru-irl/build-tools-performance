import React from 'react';
const LABEL_39861 = 'component_39861';
export function Component39861({ value = 39861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39861, 'data-value': derived.doubled }, children);
}
export default Component39861;
