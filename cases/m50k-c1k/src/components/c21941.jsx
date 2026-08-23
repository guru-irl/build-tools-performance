import React from 'react';
const LABEL_21941 = 'component_21941';
export function Component21941({ value = 21941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21941, 'data-value': derived.doubled }, children);
}
export default Component21941;
