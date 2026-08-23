import React from 'react';
const LABEL_25994 = 'component_25994';
export function Component25994({ value = 25994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25994, 'data-value': derived.doubled }, children);
}
export default Component25994;
