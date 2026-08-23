import React from 'react';
const LABEL_33451 = 'component_33451';
export function Component33451({ value = 33451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33451, 'data-value': derived.doubled }, children);
}
export default Component33451;
