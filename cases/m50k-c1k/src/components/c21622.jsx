import React from 'react';
const LABEL_21622 = 'component_21622';
export function Component21622({ value = 21622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21622, 'data-value': derived.doubled }, children);
}
export default Component21622;
