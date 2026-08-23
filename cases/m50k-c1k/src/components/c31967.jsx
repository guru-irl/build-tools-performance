import React from 'react';
const LABEL_31967 = 'component_31967';
export function Component31967({ value = 31967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31967, 'data-value': derived.doubled }, children);
}
export default Component31967;
