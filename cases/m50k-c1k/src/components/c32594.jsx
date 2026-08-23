import React from 'react';
const LABEL_32594 = 'component_32594';
export function Component32594({ value = 32594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32594, 'data-value': derived.doubled }, children);
}
export default Component32594;
