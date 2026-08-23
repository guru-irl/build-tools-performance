import React from 'react';
const LABEL_4311 = 'component_4311';
export function Component4311({ value = 4311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4311, 'data-value': derived.doubled }, children);
}
export default Component4311;
