import React from 'react';
const LABEL_43646 = 'component_43646';
export function Component43646({ value = 43646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43646, 'data-value': derived.doubled }, children);
}
export default Component43646;
