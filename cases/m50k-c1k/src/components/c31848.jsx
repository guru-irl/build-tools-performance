import React from 'react';
const LABEL_31848 = 'component_31848';
export function Component31848({ value = 31848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31848, 'data-value': derived.doubled }, children);
}
export default Component31848;
