import React from 'react';
const LABEL_33435 = 'component_33435';
export function Component33435({ value = 33435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33435, 'data-value': derived.doubled }, children);
}
export default Component33435;
