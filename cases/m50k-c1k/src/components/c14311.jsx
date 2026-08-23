import React from 'react';
const LABEL_14311 = 'component_14311';
export function Component14311({ value = 14311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14311, 'data-value': derived.doubled }, children);
}
export default Component14311;
