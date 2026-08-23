import React from 'react';
const LABEL_44156 = 'component_44156';
export function Component44156({ value = 44156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44156, 'data-value': derived.doubled }, children);
}
export default Component44156;
