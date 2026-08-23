import React from 'react';
const LABEL_33001 = 'component_33001';
export function Component33001({ value = 33001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33001, 'data-value': derived.doubled }, children);
}
export default Component33001;
