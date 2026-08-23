import React from 'react';
const LABEL_14941 = 'component_14941';
export function Component14941({ value = 14941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14941, 'data-value': derived.doubled }, children);
}
export default Component14941;
