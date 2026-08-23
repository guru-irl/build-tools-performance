import React from 'react';
const LABEL_22808 = 'component_22808';
export function Component22808({ value = 22808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22808, 'data-value': derived.doubled }, children);
}
export default Component22808;
