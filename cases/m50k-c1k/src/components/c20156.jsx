import React from 'react';
const LABEL_20156 = 'component_20156';
export function Component20156({ value = 20156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20156, 'data-value': derived.doubled }, children);
}
export default Component20156;
