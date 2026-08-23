import React from 'react';
const LABEL_23156 = 'component_23156';
export function Component23156({ value = 23156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23156, 'data-value': derived.doubled }, children);
}
export default Component23156;
