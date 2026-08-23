import React from 'react';
const LABEL_43594 = 'component_43594';
export function Component43594({ value = 43594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43594, 'data-value': derived.doubled }, children);
}
export default Component43594;
