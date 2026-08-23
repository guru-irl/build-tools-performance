import React from 'react';
const LABEL_2594 = 'component_2594';
export function Component2594({ value = 2594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2594, 'data-value': derived.doubled }, children);
}
export default Component2594;
