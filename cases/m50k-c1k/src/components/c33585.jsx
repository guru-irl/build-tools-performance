import React from 'react';
const LABEL_33585 = 'component_33585';
export function Component33585({ value = 33585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33585, 'data-value': derived.doubled }, children);
}
export default Component33585;
