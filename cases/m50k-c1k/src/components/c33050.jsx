import React from 'react';
const LABEL_33050 = 'component_33050';
export function Component33050({ value = 33050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33050, 'data-value': derived.doubled }, children);
}
export default Component33050;
