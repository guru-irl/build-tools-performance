import React from 'react';
const LABEL_3622 = 'component_3622';
export function Component3622({ value = 3622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3622, 'data-value': derived.doubled }, children);
}
export default Component3622;
