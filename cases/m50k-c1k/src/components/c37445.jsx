import React from 'react';
const LABEL_37445 = 'component_37445';
export function Component37445({ value = 37445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37445, 'data-value': derived.doubled }, children);
}
export default Component37445;
