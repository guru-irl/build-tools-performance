import React from 'react';
const LABEL_5519 = 'component_5519';
export function Component5519({ value = 5519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5519, 'data-value': derived.doubled }, children);
}
export default Component5519;
