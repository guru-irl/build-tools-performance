import React from 'react';
const LABEL_21286 = 'component_21286';
export function Component21286({ value = 21286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21286, 'data-value': derived.doubled }, children);
}
export default Component21286;
