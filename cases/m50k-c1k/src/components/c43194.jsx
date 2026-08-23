import React from 'react';
const LABEL_43194 = 'component_43194';
export function Component43194({ value = 43194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43194, 'data-value': derived.doubled }, children);
}
export default Component43194;
