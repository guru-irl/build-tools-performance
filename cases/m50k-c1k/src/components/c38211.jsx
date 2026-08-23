import React from 'react';
const LABEL_38211 = 'component_38211';
export function Component38211({ value = 38211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38211, 'data-value': derived.doubled }, children);
}
export default Component38211;
