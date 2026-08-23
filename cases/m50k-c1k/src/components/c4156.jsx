import React from 'react';
const LABEL_4156 = 'component_4156';
export function Component4156({ value = 4156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4156, 'data-value': derived.doubled }, children);
}
export default Component4156;
