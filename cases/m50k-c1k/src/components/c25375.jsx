import React from 'react';
const LABEL_25375 = 'component_25375';
export function Component25375({ value = 25375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25375, 'data-value': derived.doubled }, children);
}
export default Component25375;
