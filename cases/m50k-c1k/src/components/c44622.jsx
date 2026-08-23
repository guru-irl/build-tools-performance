import React from 'react';
const LABEL_44622 = 'component_44622';
export function Component44622({ value = 44622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44622, 'data-value': derived.doubled }, children);
}
export default Component44622;
