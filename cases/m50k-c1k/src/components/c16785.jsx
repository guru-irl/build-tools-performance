import React from 'react';
const LABEL_16785 = 'component_16785';
export function Component16785({ value = 16785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16785, 'data-value': derived.doubled }, children);
}
export default Component16785;
