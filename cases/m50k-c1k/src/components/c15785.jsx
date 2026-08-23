import React from 'react';
const LABEL_15785 = 'component_15785';
export function Component15785({ value = 15785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15785, 'data-value': derived.doubled }, children);
}
export default Component15785;
