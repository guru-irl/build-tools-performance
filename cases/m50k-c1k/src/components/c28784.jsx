import React from 'react';
const LABEL_28784 = 'component_28784';
export function Component28784({ value = 28784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28784, 'data-value': derived.doubled }, children);
}
export default Component28784;
