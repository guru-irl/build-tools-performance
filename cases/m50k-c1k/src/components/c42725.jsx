import React from 'react';
const LABEL_42725 = 'component_42725';
export function Component42725({ value = 42725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42725, 'data-value': derived.doubled }, children);
}
export default Component42725;
