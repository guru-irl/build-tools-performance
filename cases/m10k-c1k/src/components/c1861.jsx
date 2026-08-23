import React from 'react';
const LABEL_1861 = 'component_1861';
export function Component1861({ value = 1861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1861, 'data-value': derived.doubled }, children);
}
export default Component1861;
