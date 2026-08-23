import React from 'react';
const LABEL_21451 = 'component_21451';
export function Component21451({ value = 21451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21451, 'data-value': derived.doubled }, children);
}
export default Component21451;
