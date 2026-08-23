import React from 'react';
const LABEL_32621 = 'component_32621';
export function Component32621({ value = 32621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32621, 'data-value': derived.doubled }, children);
}
export default Component32621;
