import React from 'react';
const LABEL_6156 = 'component_6156';
export function Component6156({ value = 6156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6156, 'data-value': derived.doubled }, children);
}
export default Component6156;
