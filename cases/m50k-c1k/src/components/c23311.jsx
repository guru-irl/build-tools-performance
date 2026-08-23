import React from 'react';
const LABEL_23311 = 'component_23311';
export function Component23311({ value = 23311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23311, 'data-value': derived.doubled }, children);
}
export default Component23311;
