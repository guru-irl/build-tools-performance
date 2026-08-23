import React from 'react';
const LABEL_3311 = 'component_3311';
export function Component3311({ value = 3311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3311, 'data-value': derived.doubled }, children);
}
export default Component3311;
