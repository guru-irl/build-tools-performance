import React from 'react';
const LABEL_7594 = 'component_7594';
export function Component7594({ value = 7594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7594, 'data-value': derived.doubled }, children);
}
export default Component7594;
