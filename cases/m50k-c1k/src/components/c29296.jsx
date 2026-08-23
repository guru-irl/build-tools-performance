import React from 'react';
const LABEL_29296 = 'component_29296';
export function Component29296({ value = 29296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29296, 'data-value': derived.doubled }, children);
}
export default Component29296;
