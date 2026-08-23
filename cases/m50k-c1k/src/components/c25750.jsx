import React from 'react';
const LABEL_25750 = 'component_25750';
export function Component25750({ value = 25750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25750, 'data-value': derived.doubled }, children);
}
export default Component25750;
