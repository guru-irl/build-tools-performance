import React from 'react';
const LABEL_25396 = 'component_25396';
export function Component25396({ value = 25396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25396, 'data-value': derived.doubled }, children);
}
export default Component25396;
