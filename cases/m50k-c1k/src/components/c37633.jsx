import React from 'react';
const LABEL_37633 = 'component_37633';
export function Component37633({ value = 37633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37633, 'data-value': derived.doubled }, children);
}
export default Component37633;
