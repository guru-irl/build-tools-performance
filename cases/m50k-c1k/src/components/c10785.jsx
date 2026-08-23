import React from 'react';
const LABEL_10785 = 'component_10785';
export function Component10785({ value = 10785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10785, 'data-value': derived.doubled }, children);
}
export default Component10785;
