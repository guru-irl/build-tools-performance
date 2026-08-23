import React from 'react';
const LABEL_38174 = 'component_38174';
export function Component38174({ value = 38174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38174, 'data-value': derived.doubled }, children);
}
export default Component38174;
