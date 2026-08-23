import React from 'react';
const LABEL_32623 = 'component_32623';
export function Component32623({ value = 32623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32623, 'data-value': derived.doubled }, children);
}
export default Component32623;
