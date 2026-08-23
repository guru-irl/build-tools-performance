import React from 'react';
const LABEL_42402 = 'component_42402';
export function Component42402({ value = 42402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42402, 'data-value': derived.doubled }, children);
}
export default Component42402;
