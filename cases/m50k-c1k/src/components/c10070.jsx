import React from 'react';
const LABEL_10070 = 'component_10070';
export function Component10070({ value = 10070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10070, 'data-value': derived.doubled }, children);
}
export default Component10070;
