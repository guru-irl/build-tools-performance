import React from 'react';
const LABEL_42096 = 'component_42096';
export function Component42096({ value = 42096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42096, 'data-value': derived.doubled }, children);
}
export default Component42096;
