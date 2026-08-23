import React from 'react';
const LABEL_12594 = 'component_12594';
export function Component12594({ value = 12594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12594, 'data-value': derived.doubled }, children);
}
export default Component12594;
