import React from 'react';
const LABEL_13362 = 'component_13362';
export function Component13362({ value = 13362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13362, 'data-value': derived.doubled }, children);
}
export default Component13362;
