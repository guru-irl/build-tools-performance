import React from 'react';
const LABEL_32405 = 'component_32405';
export function Component32405({ value = 32405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32405, 'data-value': derived.doubled }, children);
}
export default Component32405;
