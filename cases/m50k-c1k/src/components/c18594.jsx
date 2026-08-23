import React from 'react';
const LABEL_18594 = 'component_18594';
export function Component18594({ value = 18594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18594, 'data-value': derived.doubled }, children);
}
export default Component18594;
