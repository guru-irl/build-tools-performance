import React from 'react';
const LABEL_26594 = 'component_26594';
export function Component26594({ value = 26594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26594, 'data-value': derived.doubled }, children);
}
export default Component26594;
