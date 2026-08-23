import React from 'react';
const LABEL_35594 = 'component_35594';
export function Component35594({ value = 35594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35594, 'data-value': derived.doubled }, children);
}
export default Component35594;
