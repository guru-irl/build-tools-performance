import React from 'react';
const LABEL_25692 = 'component_25692';
export function Component25692({ value = 25692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25692, 'data-value': derived.doubled }, children);
}
export default Component25692;
