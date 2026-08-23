import React from 'react';
const LABEL_34156 = 'component_34156';
export function Component34156({ value = 34156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34156, 'data-value': derived.doubled }, children);
}
export default Component34156;
