import React from 'react';
const LABEL_26156 = 'component_26156';
export function Component26156({ value = 26156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26156, 'data-value': derived.doubled }, children);
}
export default Component26156;
