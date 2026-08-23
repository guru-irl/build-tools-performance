import React from 'react';
const LABEL_34861 = 'component_34861';
export function Component34861({ value = 34861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34861, 'data-value': derived.doubled }, children);
}
export default Component34861;
