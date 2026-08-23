import React from 'react';
const LABEL_25208 = 'component_25208';
export function Component25208({ value = 25208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25208, 'data-value': derived.doubled }, children);
}
export default Component25208;
