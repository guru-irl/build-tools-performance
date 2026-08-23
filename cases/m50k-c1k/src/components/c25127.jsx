import React from 'react';
const LABEL_25127 = 'component_25127';
export function Component25127({ value = 25127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25127, 'data-value': derived.doubled }, children);
}
export default Component25127;
