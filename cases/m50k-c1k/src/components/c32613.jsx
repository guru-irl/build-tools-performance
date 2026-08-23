import React from 'react';
const LABEL_32613 = 'component_32613';
export function Component32613({ value = 32613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32613, 'data-value': derived.doubled }, children);
}
export default Component32613;
