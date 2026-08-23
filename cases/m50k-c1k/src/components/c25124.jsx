import React from 'react';
const LABEL_25124 = 'component_25124';
export function Component25124({ value = 25124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25124, 'data-value': derived.doubled }, children);
}
export default Component25124;
