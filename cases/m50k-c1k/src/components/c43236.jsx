import React from 'react';
const LABEL_43236 = 'component_43236';
export function Component43236({ value = 43236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43236, 'data-value': derived.doubled }, children);
}
export default Component43236;
