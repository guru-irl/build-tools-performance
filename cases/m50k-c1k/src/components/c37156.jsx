import React from 'react';
const LABEL_37156 = 'component_37156';
export function Component37156({ value = 37156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37156, 'data-value': derived.doubled }, children);
}
export default Component37156;
