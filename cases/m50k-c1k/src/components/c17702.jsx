import React from 'react';
const LABEL_17702 = 'component_17702';
export function Component17702({ value = 17702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17702, 'data-value': derived.doubled }, children);
}
export default Component17702;
