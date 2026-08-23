import React from 'react';
const LABEL_21939 = 'component_21939';
export function Component21939({ value = 21939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21939, 'data-value': derived.doubled }, children);
}
export default Component21939;
