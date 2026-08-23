import React from 'react';
const LABEL_13050 = 'component_13050';
export function Component13050({ value = 13050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13050, 'data-value': derived.doubled }, children);
}
export default Component13050;
