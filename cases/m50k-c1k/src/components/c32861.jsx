import React from 'react';
const LABEL_32861 = 'component_32861';
export function Component32861({ value = 32861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32861, 'data-value': derived.doubled }, children);
}
export default Component32861;
