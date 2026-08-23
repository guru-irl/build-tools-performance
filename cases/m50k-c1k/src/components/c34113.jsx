import React from 'react';
const LABEL_34113 = 'component_34113';
export function Component34113({ value = 34113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34113, 'data-value': derived.doubled }, children);
}
export default Component34113;
