import React from 'react';
const LABEL_37 = 'component_37';
export function Component37({ value = 37, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37, 'data-value': derived.doubled }, children);
}
export default Component37;
