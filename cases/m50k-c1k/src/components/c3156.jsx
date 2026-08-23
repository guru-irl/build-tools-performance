import React from 'react';
const LABEL_3156 = 'component_3156';
export function Component3156({ value = 3156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3156, 'data-value': derived.doubled }, children);
}
export default Component3156;
