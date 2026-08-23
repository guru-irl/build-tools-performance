import React from 'react';
const LABEL_34240 = 'component_34240';
export function Component34240({ value = 34240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34240, 'data-value': derived.doubled }, children);
}
export default Component34240;
