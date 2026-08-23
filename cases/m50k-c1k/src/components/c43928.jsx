import React from 'react';
const LABEL_43928 = 'component_43928';
export function Component43928({ value = 43928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43928, 'data-value': derived.doubled }, children);
}
export default Component43928;
