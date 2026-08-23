import React from 'react';
const LABEL_23786 = 'component_23786';
export function Component23786({ value = 23786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23786, 'data-value': derived.doubled }, children);
}
export default Component23786;
