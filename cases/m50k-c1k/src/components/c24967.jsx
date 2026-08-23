import React from 'react';
const LABEL_24967 = 'component_24967';
export function Component24967({ value = 24967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24967, 'data-value': derived.doubled }, children);
}
export default Component24967;
