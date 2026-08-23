import React from 'react';
const LABEL_29594 = 'component_29594';
export function Component29594({ value = 29594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29594, 'data-value': derived.doubled }, children);
}
export default Component29594;
