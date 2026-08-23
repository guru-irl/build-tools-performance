import React from 'react';
const LABEL_25378 = 'component_25378';
export function Component25378({ value = 25378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25378, 'data-value': derived.doubled }, children);
}
export default Component25378;
