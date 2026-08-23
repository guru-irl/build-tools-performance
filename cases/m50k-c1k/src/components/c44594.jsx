import React from 'react';
const LABEL_44594 = 'component_44594';
export function Component44594({ value = 44594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44594, 'data-value': derived.doubled }, children);
}
export default Component44594;
