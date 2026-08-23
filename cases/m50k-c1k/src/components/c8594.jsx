import React from 'react';
const LABEL_8594 = 'component_8594';
export function Component8594({ value = 8594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8594, 'data-value': derived.doubled }, children);
}
export default Component8594;
