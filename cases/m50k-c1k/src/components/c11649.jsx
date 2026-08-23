import React from 'react';
const LABEL_11649 = 'component_11649';
export function Component11649({ value = 11649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11649, 'data-value': derived.doubled }, children);
}
export default Component11649;
