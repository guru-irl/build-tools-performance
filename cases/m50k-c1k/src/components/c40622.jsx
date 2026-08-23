import React from 'react';
const LABEL_40622 = 'component_40622';
export function Component40622({ value = 40622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40622, 'data-value': derived.doubled }, children);
}
export default Component40622;
