import React from 'react';
const LABEL_39638 = 'component_39638';
export function Component39638({ value = 39638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39638, 'data-value': derived.doubled }, children);
}
export default Component39638;
