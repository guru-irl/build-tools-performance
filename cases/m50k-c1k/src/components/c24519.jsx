import React from 'react';
const LABEL_24519 = 'component_24519';
export function Component24519({ value = 24519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24519, 'data-value': derived.doubled }, children);
}
export default Component24519;
