import React from 'react';
const LABEL_18732 = 'component_18732';
export function Component18732({ value = 18732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18732, 'data-value': derived.doubled }, children);
}
export default Component18732;
