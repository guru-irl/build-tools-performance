import React from 'react';
const LABEL_6876 = 'component_6876';
export function Component6876({ value = 6876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6876, 'data-value': derived.doubled }, children);
}
export default Component6876;
