import React from 'react';
const LABEL_10113 = 'component_10113';
export function Component10113({ value = 10113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10113, 'data-value': derived.doubled }, children);
}
export default Component10113;
