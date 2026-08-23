import React from 'react';
const LABEL_25311 = 'component_25311';
export function Component25311({ value = 25311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25311, 'data-value': derived.doubled }, children);
}
export default Component25311;
