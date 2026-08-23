import React from 'react';
const LABEL_14156 = 'component_14156';
export function Component14156({ value = 14156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14156, 'data-value': derived.doubled }, children);
}
export default Component14156;
