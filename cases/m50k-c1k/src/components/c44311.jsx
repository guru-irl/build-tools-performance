import React from 'react';
const LABEL_44311 = 'component_44311';
export function Component44311({ value = 44311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44311, 'data-value': derived.doubled }, children);
}
export default Component44311;
