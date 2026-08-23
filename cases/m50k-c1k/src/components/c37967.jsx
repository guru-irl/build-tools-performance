import React from 'react';
const LABEL_37967 = 'component_37967';
export function Component37967({ value = 37967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37967, 'data-value': derived.doubled }, children);
}
export default Component37967;
