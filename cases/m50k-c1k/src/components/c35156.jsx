import React from 'react';
const LABEL_35156 = 'component_35156';
export function Component35156({ value = 35156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35156, 'data-value': derived.doubled }, children);
}
export default Component35156;
