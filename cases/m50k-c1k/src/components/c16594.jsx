import React from 'react';
const LABEL_16594 = 'component_16594';
export function Component16594({ value = 16594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16594, 'data-value': derived.doubled }, children);
}
export default Component16594;
