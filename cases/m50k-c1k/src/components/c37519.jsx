import React from 'react';
const LABEL_37519 = 'component_37519';
export function Component37519({ value = 37519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37519, 'data-value': derived.doubled }, children);
}
export default Component37519;
