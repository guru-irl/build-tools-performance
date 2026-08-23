import React from 'react';
const LABEL_362 = 'component_362';
export function Component362({ value = 362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_362, 'data-value': derived.doubled }, children);
}
export default Component362;
