import React from 'react';
const LABEL_11156 = 'component_11156';
export function Component11156({ value = 11156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11156, 'data-value': derived.doubled }, children);
}
export default Component11156;
