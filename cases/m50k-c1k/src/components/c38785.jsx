import React from 'react';
const LABEL_38785 = 'component_38785';
export function Component38785({ value = 38785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38785, 'data-value': derived.doubled }, children);
}
export default Component38785;
