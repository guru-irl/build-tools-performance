import React from 'react';
const LABEL_23451 = 'component_23451';
export function Component23451({ value = 23451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23451, 'data-value': derived.doubled }, children);
}
export default Component23451;
