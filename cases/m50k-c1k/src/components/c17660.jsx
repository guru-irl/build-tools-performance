import React from 'react';
const LABEL_17660 = 'component_17660';
export function Component17660({ value = 17660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17660, 'data-value': derived.doubled }, children);
}
export default Component17660;
