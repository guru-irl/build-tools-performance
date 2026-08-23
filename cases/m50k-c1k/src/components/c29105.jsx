import React from 'react';
const LABEL_29105 = 'component_29105';
export function Component29105({ value = 29105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29105, 'data-value': derived.doubled }, children);
}
export default Component29105;
