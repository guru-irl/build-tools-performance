import React from 'react';
const LABEL_25976 = 'component_25976';
export function Component25976({ value = 25976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25976, 'data-value': derived.doubled }, children);
}
export default Component25976;
