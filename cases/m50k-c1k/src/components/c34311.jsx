import React from 'react';
const LABEL_34311 = 'component_34311';
export function Component34311({ value = 34311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34311, 'data-value': derived.doubled }, children);
}
export default Component34311;
