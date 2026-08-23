import React from 'react';
const LABEL_25611 = 'component_25611';
export function Component25611({ value = 25611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25611, 'data-value': derived.doubled }, children);
}
export default Component25611;
