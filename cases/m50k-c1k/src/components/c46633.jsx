import React from 'react';
const LABEL_46633 = 'component_46633';
export function Component46633({ value = 46633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46633, 'data-value': derived.doubled }, children);
}
export default Component46633;
