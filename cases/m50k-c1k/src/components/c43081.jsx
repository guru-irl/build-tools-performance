import React from 'react';
const LABEL_43081 = 'component_43081';
export function Component43081({ value = 43081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43081, 'data-value': derived.doubled }, children);
}
export default Component43081;
