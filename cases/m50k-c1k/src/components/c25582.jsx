import React from 'react';
const LABEL_25582 = 'component_25582';
export function Component25582({ value = 25582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25582, 'data-value': derived.doubled }, children);
}
export default Component25582;
