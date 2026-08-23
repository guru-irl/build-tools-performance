import React from 'react';
const LABEL_23785 = 'component_23785';
export function Component23785({ value = 23785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23785, 'data-value': derived.doubled }, children);
}
export default Component23785;
