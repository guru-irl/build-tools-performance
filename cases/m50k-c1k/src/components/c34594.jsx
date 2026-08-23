import React from 'react';
const LABEL_34594 = 'component_34594';
export function Component34594({ value = 34594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34594, 'data-value': derived.doubled }, children);
}
export default Component34594;
