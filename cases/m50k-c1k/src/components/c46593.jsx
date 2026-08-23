import React from 'react';
const LABEL_46593 = 'component_46593';
export function Component46593({ value = 46593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46593, 'data-value': derived.doubled }, children);
}
export default Component46593;
