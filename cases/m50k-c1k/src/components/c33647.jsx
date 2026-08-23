import React from 'react';
const LABEL_33647 = 'component_33647';
export function Component33647({ value = 33647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33647, 'data-value': derived.doubled }, children);
}
export default Component33647;
