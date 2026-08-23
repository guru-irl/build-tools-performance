import React from 'react';
const LABEL_35311 = 'component_35311';
export function Component35311({ value = 35311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35311, 'data-value': derived.doubled }, children);
}
export default Component35311;
