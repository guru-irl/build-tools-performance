import React from 'react';
const LABEL_20519 = 'component_20519';
export function Component20519({ value = 20519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20519, 'data-value': derived.doubled }, children);
}
export default Component20519;
