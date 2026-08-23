import React from 'react';
const LABEL_38880 = 'component_38880';
export function Component38880({ value = 38880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38880, 'data-value': derived.doubled }, children);
}
export default Component38880;
