import React from 'react';
const LABEL_33941 = 'component_33941';
export function Component33941({ value = 33941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33941, 'data-value': derived.doubled }, children);
}
export default Component33941;
