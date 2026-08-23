import React from 'react';
const LABEL_29345 = 'component_29345';
export function Component29345({ value = 29345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29345, 'data-value': derived.doubled }, children);
}
export default Component29345;
