import React from 'react';
const LABEL_25695 = 'component_25695';
export function Component25695({ value = 25695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25695, 'data-value': derived.doubled }, children);
}
export default Component25695;
