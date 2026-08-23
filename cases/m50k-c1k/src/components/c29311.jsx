import React from 'react';
const LABEL_29311 = 'component_29311';
export function Component29311({ value = 29311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29311, 'data-value': derived.doubled }, children);
}
export default Component29311;
