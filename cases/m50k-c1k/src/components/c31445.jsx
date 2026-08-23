import React from 'react';
const LABEL_31445 = 'component_31445';
export function Component31445({ value = 31445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31445, 'data-value': derived.doubled }, children);
}
export default Component31445;
