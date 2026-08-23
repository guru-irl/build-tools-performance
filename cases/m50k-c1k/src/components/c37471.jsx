import React from 'react';
const LABEL_37471 = 'component_37471';
export function Component37471({ value = 37471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37471, 'data-value': derived.doubled }, children);
}
export default Component37471;
