import React from 'react';
const LABEL_43154 = 'component_43154';
export function Component43154({ value = 43154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43154, 'data-value': derived.doubled }, children);
}
export default Component43154;
