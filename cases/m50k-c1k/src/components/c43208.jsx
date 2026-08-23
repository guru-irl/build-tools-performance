import React from 'react';
const LABEL_43208 = 'component_43208';
export function Component43208({ value = 43208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43208, 'data-value': derived.doubled }, children);
}
export default Component43208;
