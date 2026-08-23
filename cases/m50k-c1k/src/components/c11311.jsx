import React from 'react';
const LABEL_11311 = 'component_11311';
export function Component11311({ value = 11311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11311, 'data-value': derived.doubled }, children);
}
export default Component11311;
