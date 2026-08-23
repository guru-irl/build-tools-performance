import React from 'react';
const LABEL_33423 = 'component_33423';
export function Component33423({ value = 33423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33423, 'data-value': derived.doubled }, children);
}
export default Component33423;
