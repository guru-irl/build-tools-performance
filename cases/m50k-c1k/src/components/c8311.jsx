import React from 'react';
const LABEL_8311 = 'component_8311';
export function Component8311({ value = 8311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8311, 'data-value': derived.doubled }, children);
}
export default Component8311;
