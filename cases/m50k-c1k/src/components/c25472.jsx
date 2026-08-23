import React from 'react';
const LABEL_25472 = 'component_25472';
export function Component25472({ value = 25472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25472, 'data-value': derived.doubled }, children);
}
export default Component25472;
