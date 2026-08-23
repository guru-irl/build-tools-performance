import React from 'react';
const LABEL_18595 = 'component_18595';
export function Component18595({ value = 18595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18595, 'data-value': derived.doubled }, children);
}
export default Component18595;
