import React from 'react';
const LABEL_40941 = 'component_40941';
export function Component40941({ value = 40941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40941, 'data-value': derived.doubled }, children);
}
export default Component40941;
