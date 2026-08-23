import React from 'react';
const LABEL_45159 = 'component_45159';
export function Component45159({ value = 45159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45159, 'data-value': derived.doubled }, children);
}
export default Component45159;
