import React from 'react';
const LABEL_13311 = 'component_13311';
export function Component13311({ value = 13311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13311, 'data-value': derived.doubled }, children);
}
export default Component13311;
