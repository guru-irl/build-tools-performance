import React from 'react';
const LABEL_32545 = 'component_32545';
export function Component32545({ value = 32545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32545, 'data-value': derived.doubled }, children);
}
export default Component32545;
