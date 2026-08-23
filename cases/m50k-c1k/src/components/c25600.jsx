import React from 'react';
const LABEL_25600 = 'component_25600';
export function Component25600({ value = 25600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25600, 'data-value': derived.doubled }, children);
}
export default Component25600;
