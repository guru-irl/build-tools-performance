import React from 'react';
const LABEL_33189 = 'component_33189';
export function Component33189({ value = 33189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33189, 'data-value': derived.doubled }, children);
}
export default Component33189;
