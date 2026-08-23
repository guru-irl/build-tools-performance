import React from 'react';
const LABEL_13133 = 'component_13133';
export function Component13133({ value = 13133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13133, 'data-value': derived.doubled }, children);
}
export default Component13133;
