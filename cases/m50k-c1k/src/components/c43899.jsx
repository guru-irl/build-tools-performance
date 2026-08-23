import React from 'react';
const LABEL_43899 = 'component_43899';
export function Component43899({ value = 43899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43899, 'data-value': derived.doubled }, children);
}
export default Component43899;
