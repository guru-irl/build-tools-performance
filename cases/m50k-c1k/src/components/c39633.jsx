import React from 'react';
const LABEL_39633 = 'component_39633';
export function Component39633({ value = 39633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39633, 'data-value': derived.doubled }, children);
}
export default Component39633;
