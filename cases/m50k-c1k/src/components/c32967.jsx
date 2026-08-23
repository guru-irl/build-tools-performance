import React from 'react';
const LABEL_32967 = 'component_32967';
export function Component32967({ value = 32967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32967, 'data-value': derived.doubled }, children);
}
export default Component32967;
