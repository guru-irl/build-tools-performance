import React from 'react';
const LABEL_38311 = 'component_38311';
export function Component38311({ value = 38311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38311, 'data-value': derived.doubled }, children);
}
export default Component38311;
