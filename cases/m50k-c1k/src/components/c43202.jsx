import React from 'react';
const LABEL_43202 = 'component_43202';
export function Component43202({ value = 43202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43202, 'data-value': derived.doubled }, children);
}
export default Component43202;
