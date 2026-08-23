import React from 'react';
const LABEL_22156 = 'component_22156';
export function Component22156({ value = 22156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22156, 'data-value': derived.doubled }, children);
}
export default Component22156;
