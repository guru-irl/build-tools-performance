import React from 'react';
const LABEL_43229 = 'component_43229';
export function Component43229({ value = 43229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43229, 'data-value': derived.doubled }, children);
}
export default Component43229;
