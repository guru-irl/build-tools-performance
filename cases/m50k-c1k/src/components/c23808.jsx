import React from 'react';
const LABEL_23808 = 'component_23808';
export function Component23808({ value = 23808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23808, 'data-value': derived.doubled }, children);
}
export default Component23808;
