import React from 'react';
const LABEL_30378 = 'component_30378';
export function Component30378({ value = 30378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30378, 'data-value': derived.doubled }, children);
}
export default Component30378;
