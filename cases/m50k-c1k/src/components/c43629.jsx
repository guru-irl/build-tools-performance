import React from 'react';
const LABEL_43629 = 'component_43629';
export function Component43629({ value = 43629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43629, 'data-value': derived.doubled }, children);
}
export default Component43629;
