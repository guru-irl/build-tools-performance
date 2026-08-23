import React from 'react';
const LABEL_17311 = 'component_17311';
export function Component17311({ value = 17311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17311, 'data-value': derived.doubled }, children);
}
export default Component17311;
