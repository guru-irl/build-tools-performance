import React from 'react';
const LABEL_29081 = 'component_29081';
export function Component29081({ value = 29081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29081, 'data-value': derived.doubled }, children);
}
export default Component29081;
