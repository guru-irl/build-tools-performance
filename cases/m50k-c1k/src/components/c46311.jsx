import React from 'react';
const LABEL_46311 = 'component_46311';
export function Component46311({ value = 46311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46311, 'data-value': derived.doubled }, children);
}
export default Component46311;
