import React from 'react';
const LABEL_44861 = 'component_44861';
export function Component44861({ value = 44861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44861, 'data-value': derived.doubled }, children);
}
export default Component44861;
