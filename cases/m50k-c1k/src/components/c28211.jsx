import React from 'react';
const LABEL_28211 = 'component_28211';
export function Component28211({ value = 28211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28211, 'data-value': derived.doubled }, children);
}
export default Component28211;
