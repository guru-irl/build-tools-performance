import React from 'react';
const LABEL_31466 = 'component_31466';
export function Component31466({ value = 31466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31466, 'data-value': derived.doubled }, children);
}
export default Component31466;
