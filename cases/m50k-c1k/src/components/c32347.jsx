import React from 'react';
const LABEL_32347 = 'component_32347';
export function Component32347({ value = 32347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32347, 'data-value': derived.doubled }, children);
}
export default Component32347;
