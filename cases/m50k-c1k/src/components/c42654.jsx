import React from 'react';
const LABEL_42654 = 'component_42654';
export function Component42654({ value = 42654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42654, 'data-value': derived.doubled }, children);
}
export default Component42654;
