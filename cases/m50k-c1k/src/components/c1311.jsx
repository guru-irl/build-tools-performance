import React from 'react';
const LABEL_1311 = 'component_1311';
export function Component1311({ value = 1311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1311, 'data-value': derived.doubled }, children);
}
export default Component1311;
