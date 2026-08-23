import React from 'react';
const LABEL_25513 = 'component_25513';
export function Component25513({ value = 25513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25513, 'data-value': derived.doubled }, children);
}
export default Component25513;
