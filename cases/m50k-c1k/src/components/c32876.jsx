import React from 'react';
const LABEL_32876 = 'component_32876';
export function Component32876({ value = 32876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32876, 'data-value': derived.doubled }, children);
}
export default Component32876;
