import React from 'react';
const LABEL_43497 = 'component_43497';
export function Component43497({ value = 43497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43497, 'data-value': derived.doubled }, children);
}
export default Component43497;
