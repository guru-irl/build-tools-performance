import React from 'react';
const LABEL_32785 = 'component_32785';
export function Component32785({ value = 32785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32785, 'data-value': derived.doubled }, children);
}
export default Component32785;
