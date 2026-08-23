import React from 'react';
const LABEL_25471 = 'component_25471';
export function Component25471({ value = 25471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25471, 'data-value': derived.doubled }, children);
}
export default Component25471;
