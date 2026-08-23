import React from 'react';
const LABEL_6633 = 'component_6633';
export function Component6633({ value = 6633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6633, 'data-value': derived.doubled }, children);
}
export default Component6633;
