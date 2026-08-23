import React from 'react';
const LABEL_17651 = 'component_17651';
export function Component17651({ value = 17651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17651, 'data-value': derived.doubled }, children);
}
export default Component17651;
