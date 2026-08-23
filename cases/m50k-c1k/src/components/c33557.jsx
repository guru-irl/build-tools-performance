import React from 'react';
const LABEL_33557 = 'component_33557';
export function Component33557({ value = 33557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33557, 'data-value': derived.doubled }, children);
}
export default Component33557;
