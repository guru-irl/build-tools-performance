import React from 'react';
const LABEL_33785 = 'component_33785';
export function Component33785({ value = 33785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33785, 'data-value': derived.doubled }, children);
}
export default Component33785;
