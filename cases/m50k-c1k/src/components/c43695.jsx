import React from 'react';
const LABEL_43695 = 'component_43695';
export function Component43695({ value = 43695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43695, 'data-value': derived.doubled }, children);
}
export default Component43695;
