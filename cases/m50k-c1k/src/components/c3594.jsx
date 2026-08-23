import React from 'react';
const LABEL_3594 = 'component_3594';
export function Component3594({ value = 3594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3594, 'data-value': derived.doubled }, children);
}
export default Component3594;
