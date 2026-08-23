import React from 'react';
const LABEL_23594 = 'component_23594';
export function Component23594({ value = 23594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23594, 'data-value': derived.doubled }, children);
}
export default Component23594;
