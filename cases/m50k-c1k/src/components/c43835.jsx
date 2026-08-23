import React from 'react';
const LABEL_43835 = 'component_43835';
export function Component43835({ value = 43835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43835, 'data-value': derived.doubled }, children);
}
export default Component43835;
