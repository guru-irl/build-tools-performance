import React from 'react';
const LABEL_43168 = 'component_43168';
export function Component43168({ value = 43168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43168, 'data-value': derived.doubled }, children);
}
export default Component43168;
