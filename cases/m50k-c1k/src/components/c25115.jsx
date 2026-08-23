import React from 'react';
const LABEL_25115 = 'component_25115';
export function Component25115({ value = 25115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25115, 'data-value': derived.doubled }, children);
}
export default Component25115;
