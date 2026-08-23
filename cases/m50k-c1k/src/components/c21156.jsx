import React from 'react';
const LABEL_21156 = 'component_21156';
export function Component21156({ value = 21156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21156, 'data-value': derived.doubled }, children);
}
export default Component21156;
